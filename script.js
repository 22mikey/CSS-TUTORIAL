//Three methods => Call, Apply and Bind

//1. Call

let p1 = {
    name : "Kamlesh",
    age : 26

    
}
//Globally Declared function expression
let printDetails = function(city, state, country){
    console.log(`I am ${this.name} and my age is ${this.age} and I am from ${city} of state ${state} country ${country}`)
}
//Call picture
// printDetails.call(p1 , "Pithoragarh", "UK")

//Apply
printDetails.apply(p1 , ["Pithoragarh", "UK", "INDIA"])

let p2 = {
    name : "Shekhar",
    age : 25

    // printDetails : function(){
    //     console.log(`I am ${this.name} and my age is ${this.age}`)
    // }
}

// console.log(p1)
// console.log(p2)

//DRY violate => Y/N ? => Y

// p1.printDetails();
// p2.printDetails();

