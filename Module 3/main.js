let myObj = {};
console.log(myObj); // Empty Object

let person = {
    name : "Kamlesh",
    age : 26
}

console.log(person)
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("id"));

function Person(_name,_age){
    this.name =_name;
    this.age = _age
}
let p1 = new Person("kamlesh",25);

console.log(p1);