import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Page from "./Page.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <Header />
      <Page />
    </body>
  );
}

export default App;
