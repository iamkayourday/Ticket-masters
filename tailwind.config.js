/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundClip: {
        text: 'text', // Enables the bg-clip-text utility
      },
    },
  },
  plugins: [],
}

