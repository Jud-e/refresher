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
//for loop
//functions = reusable code

/*let textBox = document.getElementById("textbox");
let temp;
let farhrenheit = document.getElementById("farhrenheit");
let kelvin = document.getElementById("kelvin");
let result = document.getElementById("result");
function convert() {
    if (farhrenheit.checked) {
        temp = Number(textBox.value);
        result.textContent = (temp * (9/5)) + 32 + "F";
        // console.log(temp);
        
    }else if (kelvin.checked) {
        temp = Number(textBox.value);
        result.textContent = input + 273.15 + "K";
        // console.log(temp);
        
    }
    else{
        result.textContent ="error";
    }
}
*/

//ARRAYS
//push(add), pop(remove), unshift ( add to front), shift (remove from front), length, indexOf
//for(let fruit of fruits)  a for loop to iterate through an array

//spread operator: allows arrays and string to be expanded
// rest operator: allows arrays and string to be reduced
// callback: function that is passed to another function
//for each method:
// let fruits  = ["apple", "orange","banana"];

// fruits.forEach(uppercase);
// fruits.forEach(display);

// function uppercase(element, index, array){
//     array[index] = element.toUpperCase();
// }
// function display(elements) {
//     console.log(elements);
// }
// .map() = accepts a callback and applies the function and creates a new array
//.filter() = accepts a callback and creates a new array with elements that pass the test

// let names = ["Jude", "Judith", "Evelyn", "Noah", "Uchechi"]
// let shortName = names.filter(shortNames);
// let longName = names.filter(longNames);

// console.log(shortName);
// console.log(longName);

// function shortNames(element){
//     return element.length <=5;
// }
// function longNames(element){
//     return element.length >5;
// }
//genuinely this is the first time i've encountered this method.
// .reduce() = reduces the elements of an array to a single value(works with a callback)
// accumulator is a paremeter in this

// it is possible to pass an entire function as a variable: 
/*const numbers = [1,2,3,4,5];

const squared = numbers.map(function(element) {
    return element = element * 2
});
const sum = numbers.reduce(function(accumulator,element) {
    return accumulator + element;
})
console.log(squared);
console.log(sum);*/

//arrow functions: (paremeters)=>some code:
/*const numbers = [1,2,3,4,5,6];
const squares = numbers.map((element)=> Math.pow(element,2))
const evenNum = numbers.filter((element) => element % 2 === 0);
const oddNum = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator,element)=> accumulator+element);

console.log(squares);*/

//JAVASCRIPT OBJECTS object= {key:value}
/*const person1 ={
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 22,
    isEmployed: true,
    sayHello:  () => console.log(`Hi I am ${this.firstName}`)
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
}
// note that the "this" keyword doesn't work with arrow functions cuz they don't have their own context.
const person3 ={
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.favFood}`)}
}
console.log(person1.isEmployed);
console.log(`${person1.firstName} and ${person2.firstName} went to buy bread`);
console.log(person2.age);
person1.sayHello();
person3.sayHello();*/

//CONSTRUCTORS
//note the upper case for the function titles when making a constructor[don't forget the "new" keyword]
/*function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford","Mustang",2024,"red");
console.log(car1.model);*/

//CLASSES
class Product{
    constructor(name,price){
        this.name = name, this.price = price
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const product1 = new Product("Shirt",19);
const product2 = new Product("Pants",154)
product1.displayProduct();
console.log(product1.calculateTotal(0.05));
console.log(product2.calculateTotal(0.05));