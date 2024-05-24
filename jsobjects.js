//creating an object
const person = {};

//adding properties to object
person.firstname="Mango";
person.lastname="Man";

console.log(person);

function Car (name, color, model){
    this.carName = name;
    this.carColor = color;
    this.carModel = model;
}

const MyCar = new Car ("Tesla","Red","802D-Edition");
const BrotherCar = new Car("Volvo", "Black","98YE-CC2");

console.log("My Car is"+ " " + MyCar.carName);
console.log("My Brother's car color is"+" "+MyCar.carColor);