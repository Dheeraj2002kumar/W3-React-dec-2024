/*
Create a Class Component
When creating a React component, the component's name must start with an upper case letter.

The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

The component also requires a render() method, this method returns HTML.

*/
// class Car extends React.Component {
//   render() {
//     return <h2>Hii, I am Car!</h2>;
//   }
// }

//-----------------------------

/*
Component Constructor
If there is a constructor() function in your component, this function will be called when the component gets initiated.

The constructor function is where you initiate the component's properties.

In React, component properties should be kept in an object called state.

You will learn more about state later in this tutorial.

The constructor function is also where you honor the inheritance of the parent component by including the super() statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).

Example
Create a constructor function in the Car component, and add a color property:
Use the color property in the render() function:
*/
// import React from "react";

// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = { color: "red" };
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }
// }

// export default Car;

/**
 *
 * ------- Props ----------
 *
 */

/*
Another way of handling component properties is by using props.

Props are like function arguments, and you send them into the component as attributes.

You will learn more about props in the next chapter.

Example
Use an attribute to pass a color to the Car component, and use it in the render() function:
*/

// import React from "react";

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.color} Car!</h2>;
//   }
// }

// export default Car;

/**
 *
 * --------- Props in the Constructor --------
 *
 */

/*
If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.
*/

// import React from "react";

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <h2>I am a {this.props.model}!</h2>;
//   }
// }

// export default Car;

/**
 *
 * +++++++++  Components in Components ++++++++++
 *
 */

/*
We can refer to components inside other components:

Example
Use the Car component inside the Garage component:
*/

/*
Components in Files
React is all about re-using code, and it can be smart to insert some of your components in separate files.

To do that, create a new file with a .js file extension and put the code inside it:

Note that the file must start by importing React (as before), and it has to end with the statement export default Car;.

*/


import React from "react";

class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </div>
    );
  }
}

export default Garage1;
