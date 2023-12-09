/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './interfaces/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.6rem',
      '3xl': '2rem',
      '4xl': '3rem',
      '5xl': '4rem',
      '6xl': '5rem',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6464c8',
          50: '#f1f5fc',
          100: '#e6ebf9',
          200: '#d1daf4',
          300: '#b5c1ec',
          400: '#97a2e2',
          500: '#7d84d7',
          600: '#6464c8',
          700: '#5553af',
          800: '#46458e',
          900: '#3d3e72',
          950: '#242442',
        },
        secondary: {
          DEFAULT: '#9B9B37',
          50: '#f9f8ec',
          100: '#f2f0d5',
          200: '#e6e4b0',
          300: '#d5d381',
          400: '#c2c059',
          500: '#9B9B37',
          600: '#83842c',
          700: '#646625',
          800: '#505222',
          900: '#444621',
          950: '#24260d',
        }

      },
    },
  },
  plugins: [],
}

//7d84d7