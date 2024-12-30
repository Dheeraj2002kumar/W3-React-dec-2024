// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// +++++++++++ W3 ++++++++++++++++++++++++

import React from "react";
import ReactDOM from "react-dom/client";

function Hello(Props) {
  return <h1>Hellow React.js</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);
