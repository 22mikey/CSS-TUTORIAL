let button = document.getElementById("box");
let count = document.getElementById("h");
let c=0;
button.addEventListener('click',() =>{
    c++;
    count.innerText = `You clicked the button ${c} times`
})
