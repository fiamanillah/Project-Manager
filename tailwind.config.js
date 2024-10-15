/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl-d': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl-l': { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg-t': { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md-p': { max: '767px' },
        // => @media (max-width: 767px) { ... }

        'sm-p': { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [
    typography,
  ],
}