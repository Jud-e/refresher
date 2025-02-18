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