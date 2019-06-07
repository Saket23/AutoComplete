import React from "react";
import ReactDOM from "react-dom";
import { countries } from "./constant";

import "./styles.css";
import AutoCompleteText from "./AutoCompleteText";

function App() {
  return (
    <div className="App">
      <AutoCompleteText items={countries} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
