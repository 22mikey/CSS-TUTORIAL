let person1 = {
    name : Kamlesh
    age : 25
}

let person2 = {
    name : Sekhar
    age : 25
}
printDetails = function(city,state){
    console.log('My name is ${this.name} my age is ${this.age} and my city is ${city} and state is ${state}')
}

printDetails.call(person1,"Pithoragarh","UK");

printDetails.apply(person1,["Pithoragarh","UK"]);

let myFun = printDetails.bind(person1,["Pithoragarh","UK"]);

console.log(myFun);
myFun();

