// Create an object called 'mycar' based on the Car class:

class Car {
  constructor(name) {
    this.brand = name;
  }
}
const mycar = new Car("Ford");
// console.log(`This is my car ${mycar.brand}.`);

// ----------- Method in classes ----------

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
