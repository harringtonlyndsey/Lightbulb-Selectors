const one = document.querySelector("#lightbulb1");
const two = document.querySelector("#lightbulb2");
const three = document.querySelector("#lightbulb3");
const four = document.querySelector("h3");
let count = 0;

new.addEventListener("click", function(){
    count+=1;
    subtitle.textContent = `You've clicked the lights ${count} times`;
    bulb.classList.toggle("item lightbulb active");
    bulb.classList.toggle("item lightbulb");
})