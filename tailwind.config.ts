import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B4A',
          light: '#FF8C70',
          dark: '#E55537',
        },
        secondary: {
          DEFAULT: '#F7F3E9',
          light: '#FFFCF4',
          dark: '#E8E1D0',
        },
        accent: {
          DEFAULT: '#4ECDC4',
          light: '#6ED9D1',
          dark: '#3AB5AD',
        },
        text: {
          dark: '#2B2D42',
          light: '#8D99AE',
          muted: '#B4BFCD',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;