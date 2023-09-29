let obj = {};

console.log(obj);

let obj2 = {
    name : "Kamlesh",
    age : 26
}

console.log(obj2);


// function Person(_name, _age){
//     this.name = _name,
//     this.age = _age
// }

// let p = new Person("Shekhar", 25);
// let p2 = new Person("Siddharth",28);

// console.log(p.hasOwnProperty("city"))

// console.log(p)
// console.log(p2)


// function Person(_name, _age){
//     this.name = _name,
//     this.age = _age

//     this.getNameAndAge = function(){
//         console.log(`I am ${this.name} and my age is ${this.age}`)
//     }
// }
// let p = new Person("Shekhar", 25);
// let p2 = new Person("Siddharth",28);

// p.getNameAndAge();
// p2.getNameAndAge();

// console.log(p)
// console.log(p2)

//DRY rule => Do not repeat youself => Do not repeat your code

function Person(_name, _age){
    this.name = _name,
    this.age = _age
}

Person.prototype.getNameAndAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`)
}

let p = new Person("Shekhar", 25);
let p2 = new Person("Siddharth",28);

p.getNameAndAge()
p2.getNameAndAge()

console.log(p)
console.log(p2)