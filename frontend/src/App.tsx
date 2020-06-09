import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch("/api/hello");
      const result = await response.json();

      setText(result.message);
    };

    doFetch();
  }, []);

  return <div className="App">{text}</div>;
}

export default App;
