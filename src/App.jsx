import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Page from "./Page.jsx";
import Stats from "./Stats.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <Header />
      <Page />
      <Stats />
    </body>
  );
}

export default App;
