//Query selector
//Navigate to an html tag by the class name and target its element
let screen = document.querySelector(".main");
let display = document.querySelector(".display");

const uploadToScreen = (number) => {
  console.log("Display a ", number);
  display.append(number);
};
//Once clicked/initialised ... I want num_key to show its value to the screen

//shorter the function the more effcient it is
const clearScreen = () => {
  display.innerHTML = "";
};

const calculateTerms = (x, y, sign) => {
  if (sign === "+") {
    display.innerHTML = parseInt(x) + parseInt(y);
  } else if (sign === "-") {
    display.innerHTML = parseInt(x) - parseInt(y);
  } else if (sign === "x") {
    display.innerHTML = parseInt(x) * parseInt(y);
  } else if (sign === "%") {
    display.innerHTML = parseInt(x) / parseInt(y);
  }
};

const splitScreen = () => {
  let input = display.textContent; //The current text on the screen
  console.log(input);
  clearScreen();

  if (input.includes("+")) {
    let plus = input.split("+");
    console.log("plus", plus);
    calculateTerms(plus[0], plus[1], "+");
  } else if (input.includes("-")) {
    let minus = input.split("-");
    console.log("minus", minus);
    calculateTerms(minus[0], minus[1], "-");
  } else if (input.includes("x")) {
    let times = input.split("x");
    console.log("multiply", times);
    calculateTerms(times[0], times[1], "x");
  } else if (input.includes("%")) {
    //divide
    let divide = input.split("%");
    console.log("Divide", divide);
    calculateTerms(divide[0], divide[1], "%");
  }
};
