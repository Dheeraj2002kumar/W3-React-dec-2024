/* 
Function Component
Here is the same example as above, but created using a Function component instead.

A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.

Example
Create a Function component called Job
*/

function Job() {
  return <h1>Hii, I am a Software Engineer</h1>;
}

// ------------------------

/*
Props
Components can be passed as props, which stands for properties.

Props are like function arguments, and you send them into the component as attributes.

You will learn more about props in the next chapter.

Example
Use an attribute to pass a color to the Job component, and use it in the render() function:
*/

function Job1(props) {
  return <h2>I am woring in {props.company}...</h2>;
}

//-------------------------------

/*
Components in Components
We can refer to components inside other components:

Example
Use the Car component inside the Garage component:
*/

function Car() {
  return <h2>I have a Car!</h2>;
}

function Garage() {
  return (
    <>
      {/* <Job />
      <Job1 company="IBM" /> */}
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}
export { Garage };
