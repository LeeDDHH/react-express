import React from "react";
import ReactDOM from "react-dom";

fetch('/api/').then(response => {
  console.log(response.json());
})

const App = () => {
  return <div>hello world</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
