//Classes in JavaScript is same as constructor function -> Upgraded in ES6
//Template or Blueprint
class Person {
    constructor(_name,_age){
        this.name = _name,
        this.age = _age
       // this.welcome = function(){
          //  console.log(`Welcone to class of Person ${this.name} of age ${this.age}`)
       // }
    }
    welcome(){
        console.log(`welcome ${this.name}`)
    }
    
    
}



let p1 = new Person("Kamlesh",25);
let p2 = new Person("Sekhar",25);
console.log(p1);
p1.welcome();
console.log(p2);
p2.welcome();