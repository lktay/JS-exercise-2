// (function helloWorld() {
// console.log("Hello, World!")
// })();


//exercise 1
function helloWorld() {
return console.log("Hello, World!")
}

console.log(helloWorld());

//exercise 2
function quadrupler(num) {

  return num * 4;
}
console.log(quadrupler(5));

//exercise 3

function welcome(firstName, lastName) {
  return "Hello " + firstName + " " + lastName + ", how can I help you?";
}

let firstName = "DAVE";
let lastName = "KAY";

console.log(welcome(firstName, lastName.toLowerCase()));

//exercise 4
function temperatureConverter(f) {
  return c = (f - 32) * (5/9) 
}
temperatureConverter(70);
console.log(c);
temperatureConverter(80);
console.log(c);
temperatureConverter(90);
console.log(Math.floor(c));

//exercise 5
console.log("Exercise 5")
let age = 26

function dogAge(age) {

let dogYears;

if (age <= 15 ) {
  dogYears = age / 15;
} 

else if (age > 15 && age < 24 ) {
  dogYears = (age - 15) / (9 + 1); 
}

else {
  dogYears = (age - 24) / (5 + 2); 
}
return dogYears.toFixed(1);
}
console.log(dogAge(26))





//exercise 5 alt 
//not working

function ageToDogAge(age) {

  let dogAge;
  if (age > 0) {
    age -= 1;
    dogAge += 15;
  }
  if (age > 0) {
    age -= 1;
    dogAge += 9;
  }
  if (age > 0) {
    dogAge += age * 5;
  }
  return dogAge;
}
console.log("Your age in dog years is " + ageToDogAge(age));



//exercise 6


// function calculator(num1, operator, num2) {
// 
// return num1 operator num2;
// 
// }
// console.log(calculator(10, "*", 3))


//exercise 7 

let a = prompt("pick a number");
let b = prompt("pick another number");
function min(a, b) {
  if (a > b) {
  return a;
  }
else {
    return b;
  }
}
console.log(min(a, b));

//exercise 8

let x = prompt("pick a number");
let y = prompt("pick a power");

function pow(x, y) {
z = Math.pow(x, y);
return z
}
console.log(pow(x, y));