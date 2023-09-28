//Polymorphism
//Poly -> many
// morph -> forms
//Many forms
//same method sound in each class have different forms.

class Animal{
    sound(){
        console.log("Animal sounds");
    }
}

class Dog{
    sound(){
        console.log("Dog barks");
    }
}

class Cat{
    sound(){
        console.log("Cat meow")
    }
}
let a1 = new Animal();
a1.sound();
let d1 = new Dog();
d1.sound();
let c1 = new Cat();
c1.sound();

// console.log(a1);
// console.log(d1);
// console.log(c1);

