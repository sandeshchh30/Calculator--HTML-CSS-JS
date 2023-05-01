const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector("#equal");
const clear = document.getElementById("AC");
const ans = document.querySelector(".screen");
const back = document.querySelector("#back");

let string = "";

buttons.forEach((button) =>{
    button.addEventListener("click", (e)=>{
        string = string + e.target.dataset.num;
        ans.value = string;
    })
})

equal.addEventListener("click", ()=>{
    ans.value = eval(string);
    string = eval(string);
})

clear.addEventListener("click", ()=>{
    string = "";
    ans.value = string;
})

back.addEventListener("click", ()=>{
    string = string.substring(0, string.length - 1);
    ans.value = string;
})