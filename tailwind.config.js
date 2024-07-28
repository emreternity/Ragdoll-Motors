const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.css",
    "./src/App.jsx",
    "./src/Header.jsx",
    "./src/Page.jsx",
    "./src/Stats.jsx",
    "./src/Foot.jsx",
    "./src/Rate.jsx",
    "./src/ProductPage.jsx",
    "./src/Contact.jsx",
    "./src/About.jsx",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
