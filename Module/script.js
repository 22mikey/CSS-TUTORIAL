//-> "this" in node js (non-strict mode)
// 1.-> console.log(this) => {} // Empty object
// 2. -> function => Global Object
// 3. -> object -> function => Object itself
// 4. -> object -> function -> function => Global Object

// console.log(this);

// function myFun(){
//     console.log(this);
// }
// myFun();

// let myObj = {
//     name : "Kamlesh",
//     age : 25,

//     myFun1 : function(){
//         console.log(this)
//     }
// }
// myObj.myFun1();

// let myObj2 = {
//     car : "Thar",
//     company : "Mahindra",

//     myFun2 : function(){
//         function myFun3(){
//             console.log(this)
//         }
//         myFun3();
//     }
// }
// myObj2.myFun2();






//-> "this" in node js (strict mode)
// 1.-> console.log(this) => {} // Empty object
// 2. -> function => undefined
// 3. -> object -> function => Object itself
// 4. -> object -> function -> function => Global Object

// 'use strict' // to use strict mode 
// console.log(this);

// function myFun(){
//     console.log(this);
// }
// myFun();

// let myObj = {
//     name : "Kamlesh",
//     age : 25,

//     myFun1 : function(){
//         console.log(this)
//     }
// }
// myObj.myFun1();

// let myObj2 = {
//     car : "Thar",
//     company : "Mahindra",

//     myFun2 : function(){
//         function myFun3(){
//             console.log(this)
//         }
//         myFun3();
//     }
// }
// myObj2.myFun2();


//-> "this" in browser (non-strict mode)
// 1.-> console.log(this) => {} // Window object
// 2. -> function => Window object
// 3. -> object -> function => Object itself
// 4. -> object -> function -> function => Window Object

// console.log(this)
// //console.log("Hello World!")

// function myFun(){
//     console.log(this);
// }
// myFun();

// let myObj = {
//     name : "Kamlesh",
//     age : 25,

//     myFun1 : function(){
//         console.log(this)
//     }
// }
// myObj.myFun1();

// let myObj2 = {
//     car : "Thar",
//     company : "Mahindra",

//     myFun2 : function(){
//         function myFun3(){
//             console.log(this)
//         }
//         myFun3();
//     }
// }
// myObj2.myFun2();


//-> "this" in browser (strict mode)
// 1.-> console.log(this) => {} // Window object
// 2. -> function => undefined
// 3. -> object -> function => Object itself
// 4. -> object -> function -> function => undefined

'use strict'
console.log(this)

function myFun(){
    console.log(this);
}
myFun();

let myObj = {
    name : "Kamlesh",
    age : 25,

    myFun1 : function(){
        console.log(this)
    }
}
myObj.myFun1();

let myObj2 = {
    car : "Thar",
    company : "Mahindra",

    myFun2 : function(){
        function myFun3(){
            console.log(this)
        }
        myFun3();
    }
}
myObj2.myFun2();