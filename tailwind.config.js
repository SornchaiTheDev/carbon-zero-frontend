/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/NoSSR/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("windy-radix-palette")],
};
