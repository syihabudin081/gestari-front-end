/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '1001': 1001,
      }
    },
  },
  variants: {
    extend: {
      lineClamp: ["hover"],
    },
  },
  plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin"), require("@tailwindcss/line-clamp")],
};
