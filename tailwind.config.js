const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/assets/App.css",
    "./src/App.jsx",
    "./src/layouts/components/Header.jsx",
    "./src/pages/Homepage/index.jsx",
    "./src/pages/Homepage/Stats.jsx",
    "./src/layouts/components/Footer.jsx",
    "./src/pages/ProductPage/index.jsx",
    "./src/pages/ContactUs/index.jsx",
    "./src/pages/AboutUs/index.jsx",
    "./index.html",
    "./src/pages/Error/index.jsx",
    "./src/pages/FAQ/index.jsx",
    "./src/pages/ShoppingCart/index.jsx",
    "./src/pages/ProductList/index.jsx",
    "./src/pages/ProductList/ProductCard.jsx",
    "./src/pages/ProductDetails/index.jsx",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(), "@tailwindcss/forms"],
};
