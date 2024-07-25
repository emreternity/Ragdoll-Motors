import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <body>
      <Header />
    </body>
  );
}

export default App;
