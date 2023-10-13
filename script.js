function addName(){
   let a = document.getElementById('inp').value 
   let p = document.createElement('p')
   p.innerText = a
   document.body.append(p)
}

// set, get, remove, clear in localStorage
let value = "Kamlesh"
localStorage.setItem("name",value)
let v = localStorage.getItem('name')
console.log(v)
localStorage.setItem('age', 25)
localStorage.setItem('city','Pithoragarh')
let g = localStorage.getItem('age')
console.log(g)
let c = localStorage.getItem('city')
console.log(c)

localStorage.removeItem('city')
//localStorage.removeItem('age')

localStorage.clear()

let array = ['Kamlesh']
let array2 = [25,45,12,"Hi"]
localStorage.setItem('name',array)
localStorage.setItem('age',array2)
let v1 = localStorage.getItem('age')
console.log(v1)

//normal object
let myObj = {
    name : "Shekhar",
    age : 25
}

localStorage.setItem("myDetail",myObj)

//JSON => JavaScript Object Notation
let myObj1 = {
    "name" : "Shekhar",
    "age" : "25"
}