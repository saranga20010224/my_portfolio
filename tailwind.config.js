/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F5FA',
          100: '#E1EBF5',
          200: '#C2D7EB',
          300: '#94BBE0',
          400: '#5F99D1',
          500: '#3475BA',
          600: '#235A99',
          700: '#1B477A',
          800: '#173961',
          900: '#0F2744',
          950: '#0A1A2E',
        },
        slateDark: {
          850: '#111927',
          900: '#0B1120',
          950: '#070D18',
        },
        biBlue: {
          DEFAULT: '#0284C7',
          light: '#38BDF8',
          dark: '#0369A1',
        },
        biAccent: {
          DEFAULT: '#2563EB',
          light: '#60A5FA',
          hover: '#1D4ED8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 30px -5px rgba(15, 39, 68, 0.08), 0 4px 6px -2px rgba(15, 39, 68, 0.03)',
        'premium-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px -2px rgba(37, 99, 235, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 15s infinite alternate',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
