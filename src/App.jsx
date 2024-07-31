import "./assets/App.css";
import { useState } from "react";
import Header from "./layouts/Header.jsx";
import Page from "./Page.jsx";
import Stats from "./Stats.jsx";
import Foot from "./layouts/Foot.jsx";
import ProductPage from "./ProductPage.jsx";
import Contact from "./Contact.jsx";
import BackToTop from "./layouts/Backtotop.jsx";
import About from "./About.jsx";

function App() {
  const [currPage, setPage] = useState("indexpg");

  function handleClick(page) {
    setPage(page);
  }

  return (
    <body id="bg">
      <BackToTop />
      <Header handleClick={handleClick} />
      <Page currPage={currPage} handleClick={handleClick} />
      <About currPage={currPage} />
      <Stats currPage={currPage} handleClick={handleClick} />
      <ProductPage currPage={currPage} handleClick={handleClick} />
      <Contact currPage={currPage} handleClick={handleClick} />
      <Foot handleClick={handleClick} />
    </body>
  );
}

export default App;
