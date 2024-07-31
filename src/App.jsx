import "./assets/App.css";

import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./layouts/components/Header.jsx";
import HomePage from "./pages/Homepage/index.jsx";
import Stats from "./pages/Homepage/Stats.jsx";
import FooterFunct from "./layouts/components/Footer.jsx";
import ProductPage from "./pages/ProductPage/index.jsx";
import ContactUs from "./pages/ContactUs/index.jsx";
import AboutUs from "./pages/AboutUs/index.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Error from "./pages/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
    ],
  },
]);

function App() {
  const [currPage, setPage] = useState("indexpg");

  return (
    <body id="bg" className="h-full">
      <RouterProvider router={router} />
    </body>
  );
}

export default App;
