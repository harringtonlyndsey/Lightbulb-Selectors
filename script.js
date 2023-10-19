let subtitle = document.querySelector("subtitle");
const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");
let count = 0;

const clickHandler = function (event) {
  console.log(event);
  lightbulb1.classList.toggle("active");
};

lightbulb1.addEventListener("click", clickHandler);
subtitle.innerHTML = "You've clicked the button ${count} times!";
