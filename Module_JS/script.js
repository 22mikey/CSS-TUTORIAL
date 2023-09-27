// let car = {
//     name : "Thar",
//     company : "Mahindra",
//     color  : "Black"
// }

// console.log(car)

// let car1 = {
//     name : "Scorpio",
//     company : "Mahindra",
//     color  : "White"
// }

// console.log(car1)

//Constructor Function

// function createCar(_name,_company,_color){
//     this.name = _name,
//     this.company = _company,
//     this.color = _color
// }
// let car1 = new createCar("Thar","Mahidra","Black")
// let car2 = new createCar("Scorpio","Mahidra","White")
// let car3 = new createCar("Bolero","Mahidra","White")
// let car4 = new createCar("Scorpio","Mahidra","Black")
// let car5 = new createCar("Thar","Mahidra","Grey")
// console.log(car1);
// console.log(car2);
// console.log(car3);
// console.log(car4);
// console.log(car5);

//Method Inside a Constructor Function

function createCar(_name,_company,_color){
    this.name = _name,
    this.company = _company,
    this.color = _color,

    this.drive = function(){
        console.log(`Driving Car ${this.name} of color ${this.color}`);
    }
}
let car1 = new createCar("Thar","Mahidra","Black")
let car2 = new createCar("Scorpio","Mahidra","White")
let car3 = new createCar("Bolero","Mahidra","White")
let car4 = new createCar("Scorpio","Mahidra","Black")
let car5 = new createCar("Thar","Mahidra","Grey")

console.log(car1);
car1.drive();

console.log(car2);
car2.drive();

console.log(car3);
car3.drive();

console.log(car4);
car4.drive();

console.log(car5);
car5.drive();
