import "./assets/App.css";

import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./layouts/components/Header.jsx";
import HomePage from "./pages/Homepage/index.jsx";
import Stats from "./pages/Homepage/Stats.jsx";
import FooterFunct from "./layouts/components/Footer.jsx";
import ProductPage from "./pages/ProductDetails/index.jsx";
import ContactUs from "./pages/ContactUs/index.jsx";
import AboutUs from "./pages/AboutUs/index.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Error from "./pages/Error/index.jsx";
import FAQ from "./pages/FAQ/index.jsx";
import ShoppingCart from "./pages/ShoppingCart/index.jsx";
import ProductList from "./pages/ProductList/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/cart", element: <ShoppingCart /> },
      { path: "/product-list/:productCategory", element: <ProductList /> },
      { path: "/products/:productModel", element: <ProductPage /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  return (
    <body id="bg" className="h-full">
      <RouterProvider router={router} />
    </body>
  );
}

export default App;
