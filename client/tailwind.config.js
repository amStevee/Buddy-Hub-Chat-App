/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#4A148C',
          800: '#5B189A',
          700: '#6A1B9A',
          600: '#7B1FA2',
          500: '#9333EA',
        },
        indigo: { 500: '#6366F1' },
        info: '#3B82F6',
        success: '#22C55E',
        error: '#EF4444',
        warning: '#F59E0B',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '24px',
        '2xl': '16px',
      },
      spacing: {
        '1.5x': '4px',
        '2x': '8px',
        '3x': '12px',
        '4x': '16px',
        '6x': '24px',
        '8x': '32px',
        '12x': '48px',
        '16x': '64px',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};
