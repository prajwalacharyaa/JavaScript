const car = {
    carName: "Tesla",
    carColor: "Red",
    carModel: "TsWing2"
};

Object.defineProperty(car, "carModel",{value:"F52c"});

console.log(car.carModel);
