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
