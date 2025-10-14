#!/bin/bash

# Deployment script for asightsolutions
# This script handles the complete deployment process

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_NAME="asightsolutions"
COMPOSE_FILE="docker-compose.yml"

# Functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

check_requirements() {
    log_info "Checking requirements..."

    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed. Please install Docker first."
        exit 1
    fi

    if ! command -v docker-compose &> /dev/null; then
        log_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi

    log_info "All requirements satisfied."
}

check_env_file() {
    if [ ! -f .env ]; then
        log_warn ".env file not found. Creating from template..."
        if [ -f .env.example ]; then
            cp .env.example .env
            log_info ".env file created. Please review and update it."
        else
            log_warn "No .env.example found. Continuing without environment file."
        fi
    fi
}

build_images() {
    log_info "Building Docker images..."
    docker-compose build --no-cache
    log_info "Docker images built successfully."
}

start_services() {
    log_info "Starting services..."
    docker-compose up -d
    log_info "Services started successfully."
}

stop_services() {
    log_info "Stopping services..."
    docker-compose down
    log_info "Services stopped successfully."
}

restart_services() {
    log_info "Restarting services..."
    docker-compose restart
    log_info "Services restarted successfully."
}

show_logs() {
    docker-compose logs -f
}

show_status() {
    log_info "Service status:"
    docker-compose ps
}

health_check() {
    log_info "Performing health check..."

    # Wait for services to be ready
    sleep 5

    # Check if the web service is responding
    if curl -f http://localhost:3001 > /dev/null 2>&1; then
        log_info "Web service is healthy and responding on port 3001"
    else
        log_warn "Web service may not be ready yet. Check logs with: ./scripts/deploy.sh logs"
    fi

    # Check if nginx is responding (if enabled)
    if docker-compose ps | grep -q "nginx"; then
        if curl -f http://localhost:80 > /dev/null 2>&1; then
            log_info "Nginx is healthy and responding on port 80"
        else
            log_warn "Nginx may not be ready yet"
        fi
    fi
}

clean_up() {
    log_warn "Cleaning up Docker resources..."
    docker-compose down -v --remove-orphans
    docker system prune -f
    log_info "Cleanup completed."
}

# Main script
case "${1:-deploy}" in
    deploy)
        log_info "Starting deployment for $PROJECT_NAME"
        check_requirements
        check_env_file
        build_images
        start_services
        health_check
        log_info "Deployment completed successfully!"
        log_info "Application is running on:"
        log_info "  - http://localhost:3001 (Next.js)"
        if docker-compose ps | grep -q "nginx"; then
            log_info "  - http://localhost:80 (Nginx)"
        fi
        ;;

    start)
        check_requirements
        start_services
        health_check
        ;;

    stop)
        stop_services
        ;;

    restart)
        restart_services
        health_check
        ;;

    rebuild)
        log_info "Rebuilding and redeploying..."
        stop_services
        build_images
        start_services
        health_check
        ;;

    logs)
        show_logs
        ;;

    status)
        show_status
        ;;

    clean)
        clean_up
        ;;

    *)
        echo "Usage: $0 {deploy|start|stop|restart|rebuild|logs|status|clean}"
        echo ""
        echo "Commands:"
        echo "  deploy   - Full deployment (build + start + health check)"
        echo "  start    - Start existing services"
        echo "  stop     - Stop running services"
        echo "  restart  - Restart services"
        echo "  rebuild  - Rebuild images and redeploy"
        echo "  logs     - Show and follow logs"
        echo "  status   - Show service status"
        echo "  clean    - Stop services and clean up Docker resources"
        exit 1
        ;;
esac
