import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// we can write like this

// root.render(<Hello />);
// +++++++++++ W3 ++++++++++++++++++++++++
/*
import React from "react";
import ReactDOM from "react-dom/client";

function Hello(Props) {
  return <h1>Hellow React.js</h1>;
}

// function Hello(Props) {
//   const myArray = ["apple", "banana", "orange"];

//   const myList = myArray.map((item) => <p>{item}</p>);
//   return myList;
// }

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);

*/

// +++++++++ exmple W3 +++++++++++++++++++++

import React from "react";
import ReactDOM from "react-dom/client";

const myElement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <th>Dheeraj</th>
    </tr>
    <tr>
      <th>Kumar</th>
    </tr>
  </table>
);

// To write HTML on multiple lines, put the HTML inside parentheses:
const myElement1 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

// -------------------------------
// One Top Level Element
// The HTML code must be wrapped in ONE top level element.

// So if you like to write two paragraphs, you must put them inside a parent element, like a div element.
// Wrap two paragraphs inside one DIV element:

const myElement2 = (
  <div>
    <p>I am a paragraphs</p>
    <p>I am a paragraph too.</p>
  </div>
);

// -----------------------------
// Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.

// A fragment looks like an empty HTML tag: <></>.
// Wrap two paragraphs inside a fragment:

const myElement3 = (
  <>
    <p>I am a paragraphs</p>
    <p>I am a paragraph too.</p>
  </>
);

// -----------------------------------

/* 
Elements Must be Closed
JSX follows XML rules, and therefore HTML elements must be properly closed.

Example
Close empty elements with />
*/

const myElement4 = <input type="text" placeholder="Enter your Name" />;
// JSX will throw an error if the HTML is not properly closed.

// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(myElement4);
