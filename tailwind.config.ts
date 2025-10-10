import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3AA6B9',
          50: '#E8F4F6',
          100: '#D1E9ED',
          500: '#3AA6B9',
          600: '#2C8A94',
          700: '#236F77',
        },
        cyan: {
          100: '#CFFAFE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        teal: {
          600: '#0D9488',
          700: '#0F766E',
        },
        'primary-dark': '#2C8A94',
        dark: '#000000',
        light: '#ffffff',
        heading: '#2d3436',
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': 'clamp(3rem, 8vw, 6rem)',
        'headline-lg': 'clamp(2.5rem, 6vw, 4rem)',
        'headline-md': 'clamp(2rem, 4vw, 3rem)',
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        'card': '20px',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0,0,0,0.1)',
      },
      spacing: {
        'section': '80px',
        'container': '1400px',
      },
    },
  },
  plugins: [],
}

export default config