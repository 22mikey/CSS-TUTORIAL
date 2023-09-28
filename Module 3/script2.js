//Encapsulation -> capsule
// The wrapping of data and functions into a single unit(class) is known as ENCAPSULATION
//Data cant be accessed ouside world only those function which are wrapped in the class can access it.

function Person(_name,_age){
    let name = _name // private property of Person
    let age = _age

    this.getName = function(){
        return name;
        
    }
}

let p = new Person("Kamlesh",26);
//p.getName();
p.name = "Shekhar";
console.log(p.getName()) //function which are wrapped in the class can access it.
