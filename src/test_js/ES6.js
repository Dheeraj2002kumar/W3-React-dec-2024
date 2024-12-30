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

// The super() method refers to the parent class.

// By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.
