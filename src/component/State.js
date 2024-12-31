/*
React Class Component State
React Class components have a built-in state object.

You might have noticed that we used state earlier in the component constructor section.

The state object is where you store property values that belongs to the component.

When the state object changes, the component re-renders.

Creating the state Object
The state object is initialized in the constructor:

Example
Specify the state object in the constructor method:
*/

// import React from "react";

// class Car extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {brand: "Ford"};
//     }

//     render(){
//         return (
//             <div>
//                 <h1>My Car</h1>
//             </div>
//         );
//     }
// }

// -----------------------------

/* 
The state object can contain as many properties as you like:

Example
Specify all the properties your component need:
*/

// import React from "react";

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         brand: "Ford",
//         model: "Mustang",
//         color: "red",
//         year: 1964
//      };
//   }

//   render() {
//     return (
//       <div>
//         <h1>My Car</h1>
//       </div>
//     );
//   }
// }

//---------------------------

/*
Using the state Object
Refer to the state object anywhere in the component by using the this.state.propertyname syntax:

Example:
Refer to the state object in the render() method:

*/

// import React from "react";

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color} {this.state.model} from {this.state.year}.
//         </p>
//       </div>
//     );
//   }
// }

// export default Car;

/**
 *
 * +++++++++++++ Changing the state Object +++++++
 */

/*
To change a value in the state object, use the this.setState() method.

When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).

Example:
Add a button with an onClick event that will change the color property:

*/

import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default Car;
