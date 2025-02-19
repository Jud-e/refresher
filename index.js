// console.log(`Hello world`);
// console.log(`I like pizza!!`);

// window.alert(`Hello world`);
// window.alert (`I like pizza!!`);

// number datatype
// document.getElementById(`myh1`).textContent = `Hello`;
// document.getElementById(`myp`).textContent = `I like pizza`;
// let x = 12;
// let age = 25;
// var y;
// y = 5.2;
// x = 10;
// console.log(x);
// console.log(y);
// console.log(`age is ${age}`);
// console.log(`the values are ${x} and ${y}`);
// console.log(typeof x);

// let fullName = `John Doe`;
// let age = 23;
// let isStudent = true;
// document.getElementById(`p1`).textContent = `Your name is ${fullName}`;
// document.getElementById(`p2`).textContent = `You are ${age} years old`;
// document.getElementById(`p3`).textContent = `Are you enrolled in school? : ${isStudent}`;

/*
parenthesis
exponents
multiplication, division and modulus
addition and subtraction
*/


// let students = 30;
// students = students * 2;
// console.log(students);

//user input
// let username;

// username = window.prompt(`What's your username?`);
// console.log(`Hello ${username}`);
// let username;
// document.getElementById(`myButton`).onclick = function() {
//     username = document.getElementById('myText').value;
//     document.getElementById(`myh1`).textContent = `Hello ${username}`;
//     console.log(username);
// }

// let age = window.prompt(`How old are you?`);
// age = Number12(age);
// console.log(typeof age);
// console.log(age);12

// let circumference;
// let diameter;
// let radius;
// const pi = 3.14;

// diameter = window.prompt(`What is the diameter of your circle?`);
// diameter = Number(diameter);
// radius = diameter / 2;


// /**
//  * Handles the submit event for the radius input
//  * @param {Event} params - submit event
//  */
// document.getElementById("mySubmit").onclick = function name(params) {
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2 * pi * radius;
//     console.log(circumference);
// }

/*
let decreaseBtn = document.getElementById(`decreaseBtn`);
let increaseBtn = document.getElementById(`increaseBtn`);
let resetBtn = document.getElementById(`resetBtn`);
let countLabel = document.getElementById(`countLabel`);
let count = 0;

decreaseBtn.onclick = function(){
    count = count - 1;
    countLabel.textContent = count;
}
increaseBtn.onclick = function(){
    count = count + 1;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}*/

// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const masterBtn = document.getElementById("masterBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("status");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
//     if (myCheckbox.checked) {
//         subResult.textContent = "You are subscribed";
//     }
//     else{
//         subResult.textContent = "You are NOT subscribed";
//     }

//     if (visaBtn.checked) {
//         paymentResult.textContent = "Payment with VISA card";
//     }
//     else if (masterBtn.checked) {
//         paymentResult.textContent = "Payment with mastercard";
//     }
//     else if (paypalBtn.checked) {
//         paymentResult.textContent = "Payment with PayPal";   }
//         else{
//             paymentResult.textContent = "No payment methods selected";
//         }
// }

// let message =5;
// message < 3? console.log("yes"):console.log("no");

//switch cases

// let day = 3;
// switch (day) {
//     case 1:
//         console.log(`today is monday`)
//         break;

//     default:
//         console.log("not a day");
//         break;
// }
// let testScore = 50;
// let letterGrade;

// switch (true) {
//     case testScore >= 90:
//         letterGrade = "A";
//         console.log(letterGrade);
//         break;
//     case testScore >= 80:
//             letterGrade = "B";
//             console.log(letterGrade);
//             break;
//     case testScore >= 70:
//         letterGrade = "C";
//         console.log(letterGrade);
//         break;
//     case testScore >= 60:
//         letterGrade = "D";
//         console.log(letterGrade);
//         break;
//     case testScore >= 50:
//         letterGrade = "E";
//         console.log(letterGrade);
//         break;
//     default:
//         letterGrade = "F";
//         console.log(letterGrade);
//         break;
// }

/*const email = "johndoe@gmail.com";
let username = email.slice(0, email.indexOf("@"));
console.log(username);
let extension = email.slice(email.indexOf("@") +1);
console.log(extension);*/

//method chaining

//while loop