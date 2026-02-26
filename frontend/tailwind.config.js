/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'oklch(var(--background) / <alpha-value>)',
        foreground: 'oklch(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'oklch(var(--card) / <alpha-value>)',
          foreground: 'oklch(var(--card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'oklch(var(--popover) / <alpha-value>)',
          foreground: 'oklch(var(--popover-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
          foreground: 'oklch(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
          foreground: 'oklch(var(--secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
          foreground: 'oklch(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
          foreground: 'oklch(var(--accent-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
          foreground: 'oklch(var(--destructive-foreground) / <alpha-value>)',
        },
        border: 'oklch(var(--border) / <alpha-value>)',
        input: 'oklch(var(--input) / <alpha-value>)',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        chart: {
          1: 'oklch(var(--chart-1) / <alpha-value>)',
          2: 'oklch(var(--chart-2) / <alpha-value>)',
          3: 'oklch(var(--chart-3) / <alpha-value>)',
          4: 'oklch(var(--chart-4) / <alpha-value>)',
          5: 'oklch(var(--chart-5) / <alpha-value>)',
        },
        sidebar: {
          DEFAULT: 'oklch(var(--sidebar) / <alpha-value>)',
          foreground: 'oklch(var(--sidebar-foreground) / <alpha-value>)',
          primary: 'oklch(var(--sidebar-primary) / <alpha-value>)',
          'primary-foreground': 'oklch(var(--sidebar-primary-foreground) / <alpha-value>)',
          accent: 'oklch(var(--sidebar-accent) / <alpha-value>)',
          'accent-foreground': 'oklch(var(--sidebar-accent-foreground) / <alpha-value>)',
          border: 'oklch(var(--sidebar-border) / <alpha-value>)',
          ring: 'oklch(var(--sidebar-ring) / <alpha-value>)',
        },

        /* Water Blue palette (primary) */
        'school-blue': {
          DEFAULT: 'oklch(0.42 0.13 220)',
          dark: 'oklch(0.28 0.12 220)',
          light: 'oklch(0.55 0.13 220)',
          50: 'oklch(0.97 0.02 215)',
          100: 'oklch(0.93 0.05 215)',
          200: 'oklch(0.86 0.08 218)',
          300: 'oklch(0.72 0.11 220)',
          400: 'oklch(0.58 0.13 220)',
          500: 'oklch(0.48 0.13 220)',
          600: 'oklch(0.42 0.13 220)',
          700: 'oklch(0.33 0.12 220)',
          800: 'oklch(0.24 0.10 220)',
          900: 'oklch(0.16 0.07 220)',
        },

        /* Red palette (accent) — matches logo red */
        'school-red': {
          DEFAULT: 'oklch(0.50 0.20 25)',
          dark: 'oklch(0.38 0.18 22)',
          light: 'oklch(0.62 0.19 28)',
          50: 'oklch(0.97 0.02 25)',
          100: 'oklch(0.94 0.05 25)',
          200: 'oklch(0.88 0.09 25)',
          300: 'oklch(0.78 0.14 25)',
          400: 'oklch(0.65 0.18 25)',
          500: 'oklch(0.50 0.20 25)',
          600: 'oklch(0.43 0.19 23)',
          700: 'oklch(0.36 0.17 22)',
          800: 'oklch(0.28 0.13 22)',
          900: 'oklch(0.20 0.09 20)',
        },

        /* Cream/off-white */
        'school-cream': {
          DEFAULT: 'oklch(0.97 0.01 215)',
          light: 'oklch(0.99 0.005 215)',
        },

        /* Legacy aliases — map to new blue/red so old class names still work */
        'school-indigo': {
          DEFAULT: 'oklch(0.42 0.13 220)',
          dark: 'oklch(0.28 0.12 220)',
          light: 'oklch(0.55 0.13 220)',
          50: 'oklch(0.97 0.02 215)',
          100: 'oklch(0.93 0.05 215)',
          200: 'oklch(0.86 0.08 218)',
          300: 'oklch(0.72 0.11 220)',
          400: 'oklch(0.58 0.13 220)',
          500: 'oklch(0.48 0.13 220)',
          600: 'oklch(0.42 0.13 220)',
          700: 'oklch(0.33 0.12 220)',
          800: 'oklch(0.24 0.10 220)',
          900: 'oklch(0.16 0.07 220)',
        },
        'school-amber': {
          DEFAULT: 'oklch(0.50 0.20 25)',
          dark: 'oklch(0.38 0.18 22)',
          light: 'oklch(0.62 0.19 28)',
          50: 'oklch(0.97 0.02 25)',
          100: 'oklch(0.94 0.05 25)',
          200: 'oklch(0.88 0.09 25)',
          300: 'oklch(0.78 0.14 25)',
          400: 'oklch(0.65 0.18 25)',
          500: 'oklch(0.50 0.20 25)',
          600: 'oklch(0.43 0.19 23)',
          700: 'oklch(0.36 0.17 22)',
          800: 'oklch(0.28 0.13 22)',
          900: 'oklch(0.20 0.09 20)',
        },
        'school-green': {
          DEFAULT: 'oklch(0.42 0.13 220)',
          dark: 'oklch(0.28 0.12 220)',
          light: 'oklch(0.55 0.13 220)',
          100: 'oklch(0.93 0.05 215)',
          200: 'oklch(0.86 0.08 218)',
          400: 'oklch(0.58 0.13 220)',
        },
        'school-gold': {
          DEFAULT: 'oklch(0.50 0.20 25)',
          light: 'oklch(0.62 0.19 28)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        card: '0 2px 12px 0 oklch(0.42 0.13 220 / 0.08)',
        'card-hover': '0 8px 30px 0 oklch(0.42 0.13 220 / 0.16)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
};
