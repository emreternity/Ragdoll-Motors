import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Page from "./Page.jsx";
import Stats from "./Stats.jsx";
import Foot from "./Foot.jsx";
import Caro from "./Caro.jsx";
import Rate from "./Rate.jsx";
import ProductPage from "./ProductPage.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <body id="bg">
      <Header />
      <Page />
      <Stats />
      <Caro />
      <ProductPage />
      <Contact />
      <Foot />
    </body>
  );
}

export default App;
