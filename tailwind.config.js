/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
      colors: {
        "primary": "#0f123d",
        "secondary": "#50b8dc",
        "accent": "#fd435a",
        "neutral": "#ccc",
        "dark-grey": "#333",
        "off-white": "#F5F5F5"

      }
    },
  },
  plugins: [],
}

