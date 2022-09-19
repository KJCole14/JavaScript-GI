// Very Easy
// var num1 = 6;

// var num2 = 2;
// console.log("The difference between " + num1 + " " + "and " + num2 + " is " + (num1 - num2));

// //Easy
// var Michael, Sam;
// Sam = 3;
// Michael = 7;
// if (Michael > Sam) {
//     console.log("The name Michael is longer that Sam by " + (Michael - Sam) + " Characters");
// }

// //Medium
// let Statement = prompt("Give a greeting.");
// let upperCase = Statement.toUpperCase();
// let lowerCase = Statement.toLowerCase();

// if (Statement === upperCase) {
//     console.log("Please don't shout...")
// } else if (Statement === lowerCase) {
//         console.log("Speak up, I can't hear you.");
// } else {
//     console.log("Nice to meet you. :)")
// }

// // Hard

// function add(num1, num2) {
//     let result = num1 + num2;
//     console.log(result)
// }

// function subtract(num1, num2) {
//     let result = num1 - num2;
//     console.log(result)
// }

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     console.log(result)
// }

// function divide(num1, num2) {
//     let result = num1 / num2;
//     console.log(result)
// }

// Very Hard

const num1 = parseFloat(prompt("Enter 1st number"));
const operator = prompt("input operation (+, -, *, /)");
const num2 = parseFloat(prompt("Enter 2nd number"));

if (operator === "+") {
    result = num1 + num2; 
} else if (operator === "-") {
    result = num1 - num2; 
} else if (operator === "*") {
    result = num1 * num2; 
} else {
    result = num1 / num2; 
}

console.log(num1 + operator + num2 ," = " ,result);