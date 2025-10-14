#!/bin/bash

# SSL Certificate Setup Script for asightsolutions
# This script helps set up SSL certificates using Let's Encrypt or self-signed certificates

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SSL_DIR="./nginx/ssl"
DOMAIN="${1:-asightsolutions.com}"

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

log_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

create_ssl_directory() {
    log_step "Creating SSL directory..."
    mkdir -p "$SSL_DIR"
    log_info "SSL directory created at $SSL_DIR"
}

generate_self_signed_certificate() {
    log_step "Generating self-signed SSL certificate..."

    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout "$SSL_DIR/privkey.pem" \
        -out "$SSL_DIR/fullchain.pem" \
        -subj "/C=US/ST=State/L=City/O=Organization/CN=$DOMAIN"

    log_info "Self-signed certificate generated successfully"
    log_warn "Note: Self-signed certificates will show browser warnings"
    log_warn "For production, use Let's Encrypt certificates"
}

setup_letsencrypt() {
    log_step "Setting up Let's Encrypt certificate..."

    if ! command -v certbot &> /dev/null; then
        log_error "Certbot is not installed."
        echo ""
        echo "To install certbot:"
        echo "  Ubuntu/Debian: sudo apt-get install certbot"
        echo "  CentOS/RHEL:   sudo yum install certbot"
        echo "  macOS:         brew install certbot"
        exit 1
    fi

    log_info "Certbot found. Please follow the interactive prompts..."

    # Create webroot directory for challenges
    mkdir -p ./certbot/www

    # Run certbot
    sudo certbot certonly --webroot \
        -w ./certbot/www \
        -d "$DOMAIN" \
        -d "www.$DOMAIN"

    # Copy certificates to nginx directory
    sudo cp /etc/letsencrypt/live/$DOMAIN/fullchain.pem "$SSL_DIR/"
    sudo cp /etc/letsencrypt/live/$DOMAIN/privkey.pem "$SSL_DIR/"
    sudo chown $(whoami):$(whoami) "$SSL_DIR"/*.pem

    log_info "Let's Encrypt certificate installed successfully"
    log_info "Certificate will auto-renew via certbot"
}

setup_certbot_docker() {
    log_step "Setting up Let's Encrypt using Docker..."

    # Create necessary directories
    mkdir -p ./certbot/www
    mkdir -p ./certbot/conf

    # Run certbot via Docker
    docker run -it --rm \
        -v "$(pwd)/certbot/conf:/etc/letsencrypt" \
        -v "$(pwd)/certbot/www:/var/www/certbot" \
        certbot/certbot certonly \
        --webroot \
        -w /var/www/certbot \
        -d "$DOMAIN" \
        -d "www.$DOMAIN" \
        --email "admin@$DOMAIN" \
        --agree-tos \
        --no-eff-email

    # Copy certificates to nginx directory
    cp ./certbot/conf/live/$DOMAIN/fullchain.pem "$SSL_DIR/"
    cp ./certbot/conf/live/$DOMAIN/privkey.pem "$SSL_DIR/"

    log_info "Let's Encrypt certificate installed successfully"
}

show_certificate_info() {
    if [ -f "$SSL_DIR/fullchain.pem" ]; then
        log_step "Certificate Information:"
        openssl x509 -in "$SSL_DIR/fullchain.pem" -noout -subject -dates
    fi
}

# Main menu
echo ""
echo "========================================="
echo "  SSL Certificate Setup"
echo "========================================="
echo ""
echo "Domain: $DOMAIN"
echo ""
echo "Choose an option:"
echo "  1) Generate self-signed certificate (for development)"
echo "  2) Setup Let's Encrypt certificate (requires certbot)"
echo "  3) Setup Let's Encrypt via Docker"
echo "  4) Show certificate info"
echo "  5) Exit"
echo ""
read -p "Enter your choice [1-5]: " choice

create_ssl_directory

case $choice in
    1)
        generate_self_signed_certificate
        show_certificate_info
        ;;
    2)
        setup_letsencrypt
        show_certificate_info
        ;;
    3)
        setup_certbot_docker
        show_certificate_info
        ;;
    4)
        show_certificate_info
        ;;
    5)
        log_info "Exiting..."
        exit 0
        ;;
    *)
        log_error "Invalid choice"
        exit 1
        ;;
esac

echo ""
log_info "SSL setup completed!"
log_info "Certificates are located in: $SSL_DIR"
echo ""
log_info "Next steps:"
echo "  1. Update nginx configuration with your domain name"
echo "  2. Start the services: ./scripts/deploy.sh deploy"
echo ""
