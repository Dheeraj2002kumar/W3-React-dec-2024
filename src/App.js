import "./styles.css";

// ------------------------------

/* 
Attribute class = className
The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.

Use attribute className instead.

JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.
*/

const myElement5 = <h1 className="myElement5">Hello React</h1>;

export default function App() {
  return myElement5;
}
