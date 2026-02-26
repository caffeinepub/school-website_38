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

        /* Electric Indigo/Violet palette */
        'school-indigo': {
          DEFAULT: 'oklch(0.38 0.18 275)',
          dark: 'oklch(0.25 0.16 275)',
          light: 'oklch(0.50 0.18 275)',
          50: 'oklch(0.97 0.02 275)',
          100: 'oklch(0.93 0.05 275)',
          200: 'oklch(0.86 0.09 275)',
          300: 'oklch(0.72 0.14 275)',
          400: 'oklch(0.58 0.17 275)',
          500: 'oklch(0.45 0.18 275)',
          600: 'oklch(0.38 0.18 275)',
          700: 'oklch(0.30 0.16 275)',
          800: 'oklch(0.22 0.12 275)',
          900: 'oklch(0.15 0.08 275)',
        },

        /* Bright Amber/Orange palette */
        'school-amber': {
          DEFAULT: 'oklch(0.75 0.18 55)',
          dark: 'oklch(0.60 0.18 50)',
          light: 'oklch(0.85 0.16 60)',
          50: 'oklch(0.98 0.02 60)',
          100: 'oklch(0.95 0.06 60)',
          200: 'oklch(0.90 0.10 58)',
          300: 'oklch(0.85 0.14 57)',
          400: 'oklch(0.80 0.17 56)',
          500: 'oklch(0.75 0.18 55)',
          600: 'oklch(0.68 0.18 52)',
          700: 'oklch(0.60 0.18 50)',
          800: 'oklch(0.50 0.15 48)',
          900: 'oklch(0.38 0.12 45)',
        },

        /* Cream/off-white */
        'school-cream': {
          DEFAULT: 'oklch(0.97 0.01 280)',
          light: 'oklch(0.99 0.005 280)',
        },

        /* Legacy aliases for backward compat */
        'school-green': {
          DEFAULT: 'oklch(0.38 0.18 275)',
          dark: 'oklch(0.25 0.16 275)',
          light: 'oklch(0.50 0.18 275)',
          100: 'oklch(0.93 0.05 275)',
          200: 'oklch(0.86 0.09 275)',
          400: 'oklch(0.58 0.17 275)',
        },
        'school-gold': {
          DEFAULT: 'oklch(0.75 0.18 55)',
          light: 'oklch(0.85 0.16 60)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        card: '0 2px 12px 0 oklch(0.38 0.18 275 / 0.08)',
        'card-hover': '0 8px 30px 0 oklch(0.38 0.18 275 / 0.16)',
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
