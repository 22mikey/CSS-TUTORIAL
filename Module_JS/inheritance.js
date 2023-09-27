//Eg of Inheritance

//Person
//Teacher
//Student


class Person{
    constructor(_name,_age){
        this.name = _name,
        this.age = _age
    }
    welcome(){
        console.log(`Welcome ${this.name}`)
    }
}

class Teacher extends Person{
    constructor(_name,_age,_classStrength){
        super(_name,_age)
        this.classStrength = _classStrength
    }
    test(){
        super.welcome();
    }
}

let t1 = new Teacher("ABC",26,2)
t1.test();
console.log(t1)

class Student extends Person{
    constructor(_name,_age,_marks){
        super(_name,_age)
        this.marks = _marks
    }
    run(){
        super.welcome();
    }
}

let s1 = new Student("XYZ",18,50)
s1.run();
console.log(s1)