//calculator
let num1;
let num2;
let result;
let add;


add = document.getElementById("add");
subtract = document.getElementById("subtract");
multiply = document.getElementById("multiply");
divide = document.getElementById("divide");

add.onclick = function (){
    num1 = Number(document.getElementById(`num1`).value);
    num2 = Number(document.getElementById(`num2`).value);
    result = num1 + num2;
    console.log(result);
    alert(result);
}

subtract.onclick = function (){
    num1 = Number(document.getElementById(`num1`).value);
    num2 = Number(document.getElementById(`num2`).value);
    result = num1 - num2;
    console.log(result);
    alert(result);
}
multiply.onclick = function (){
    num1 = Number(document.getElementById(`num1`).value);
    num2 = Number(document.getElementById(`num2`).value);
    result = num1 * num2;
    console.log(result);
    alert(result);
}
divide.onclick = function (){
    num1 = Number(document.getElementById(`num1`).value);
    num2 = Number(document.getElementById(`num2`).value);
    if (num1, num2 == 0){ 
        alert(`Cannot divide by zero`);
    }else{
    result = num1 / num2;
    console.log(result);
    alert(result);
    }
}

//age in days
let age;
let days;
let check;


check = document.getElementById("check");
check.onclick = function(){
    age = document.getElementById("age");
    age = Number(age.value);
    days = age * 365;
    alert(`You are ${days} days old`);
}

//Circle area and circumference
let radius;
let area;
let circumference;
let result2;
let circleCal = document.getElementById("calCircle");
circleCal.onclick = function(){
    radius = document.getElementById("radius");
    radius = Number(radius.value);
    area = Math.PI * Math.pow(radius, 2);
    circumference = 2 * Math.PI * radius;
    result2 = document.getElementById("result2");
    result2.textContent = `The area of your circle is ${area} and the circumference is ${circumference}`
}

//Random number generator
let counter = 1;
let randomNum;
let guess;
let calculate;

calculate = document.getElementById("calculate");
calculate.onclick = function(){
    if (counter <=3) {
        guess = document.getElementById("guess");
        guess = Number(guess.value);
        console.log(guess);
        randomNum = Math.floor(Math.random() * 10) + 1;
        // randomNum = 3;
        console.log(randomNum);
        if (guess == randomNum) {
            alert("You got it right");
        }else{
            alert("You got it wrong");
        }
        counter++;
    }
    else{
        alert("You're out of tries");
    }
}