/*

// Create an object called 'mycar' based on the Car class:

class Car {
  constructor(name) {
    this.brand = name;
  }
}
const mycar = new Car("Ford");
// console.log(`This is my car ${mycar.brand}.`);

*/

// ----------- Method in classes ----------
/*
class Car1 {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

const myCar = new Car1("Ford");
// console.log(myCar.present());
*/

// -------------- Class Inheritance -------------------
// To create a class inheritance, use the extends keyword.

// A class created with a class inheritance inherits all the methods from another class:

/*
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

*/

// The super() method refers to the parent class.

// By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.

// +++++++++++ React ES6 Arrow Functions ++++++++++++++

// Arrow Functions
// Arrow functions allow us to write shorter function syntax:

// Before

/*

hello = function () {
  return "Hello World!";
};

console.log(hello());

// with arrow function

hii = () => {
  return "This is arrow function!";
};

console.log(hii());

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

hey = () => "hello React";
console.log(hey());

// Note: This works only if the function has only one statement.


// If you have parameters, you pass them inside the parentheses:

parameters_arrow = (val) => "Hello " + val;

console.log(parameters_arrow("Dheeraj"));

// In fact, if you have only one parameter, you can skip the parentheses as well:

hello_1 = (val) => "Hello " + val;
console.log(hello_1("React"));


*/

// +++++++++ this keyword ++++++++++++++++++

// With a regular function, this represents the object that called the function:

/*
class Header {
  constructor() {
    this.color = "Red";
  }

  changeColor = function () {
    document.getElementById("demo").innerHTML += this;
  };
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);

*/

// ---------------------------------------------

/*
class Header {
  constructor() {
    this.color = "Red";
  }

  //Arrow function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  };
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);

*/

//---------------------------------------------------

// Array Method

/*
const myArray = ["apple", "banana", "orange"];

const myList = myArray.map((item) => item);

console.log(myList);

*/

//----------- Destructuring --------------------

// Destructing Arrays

//Here is the old way of assigning array items to a variable:

/*
const vehicles = ["mustang", "f-150", "expedition"];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

console.log(`${car}, ${truck}, ${suv}`);
// ---------------

// Here is the new way of assigning array items to a variable:

const vehicles1 = ["mustang", "f-150", "expedition"];

const [car1, truck1, suv1] = vehicles1;

console.log(`${car1}, ${truck1}, ${suv1}`);


// Destructuring comes in handy when a function returns an array:

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;
  
  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);
// console.log(add);
// console.log(subtract);
// console.log(multiply);
// console.log(divide);

*/
// +++++++++++++ Destructuring Objects +++++++++

// Here is the old way of using an object inside a function:
const vehiclesOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

myVehicle(vehiclesOne);

// old way
function myVehicle(vehicles) {
  const message = `My ${vehicles.type} is a ${vehicles.color} ${vehicles.brand} ${vehicles.model}`;
  // console.log(message);
}

// Here is the new way of using an object inside a function:
myVehicle1(vehiclesOne);

function myVehicle1({ type, color, brand, model }) {
  const message = `My ${type} is a ${color} ${brand} ${model}`;
  // console.log(message);
}

// We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:

const vehicles2 = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
  registration: {
    city: "Houston",
    state: "texas",
    country: "USA",
  },
};

myVehicle2(vehicles2);

function myVehicle2({ model, registration: { state } }) {
  const message = `My ${model} is registered in ${state}.`;
  // console.log(message);
}

// ++++++++++++++++++ Spread Operator ++++++++++++++++

const numbersOne = [1, 2, 3];
const numberTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numberTwo];
// console.log(numbersCombined);

// Assign the first and second items from numbers to variables and put the rest in an array:
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
// console.log(one);
// console.log(two);
// console.log(rest);

//We can use the spread operator with objects too:
// combine these two objects:

const myVehicle3 = {
  brand: "Ford",
  model: "Mustang",
  color: "Red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle3, ...updateMyVehicle };
// console.log(myUpdatedVehicle);

// Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.
