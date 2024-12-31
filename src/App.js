import "./styles.css";

// ------------------------------

/* 
Attribute class = className
The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

Use attribute className instead.

JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.
*/

const myElement5 = <h1 className="myElement5">Hello React</h1>;

// -------------------------------

// +++++++++++++ Conditions - if statements ++++++

/* 
React supports if statements, but not inside JSX.

To be able to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead:

Option 1:
Write if statements outside of the JSX code:

Example
Write "Hello" if x is less than 10, otherwise "Goodbye":
*/

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello!";
}

const myElement6 = <h1>{text}</h1>;

// ----------------------

/**
 Option 2:
Use ternary expressions instead:

Example
Write "Hello" if x is less than 10, otherwise "Goodbye":

 */

const x1 = 5;

const myElement7 = <h1>{x1 < 10 ? "Hello React!" : "Goodbye"}</h1>;

// Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.

// -------------------------------

export default function App() {
  return myElement7;
}
