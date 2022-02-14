/* Strings */

// *Q* - How can I ask the user for their name and store it in a variable?
let name = prompt("What is your name?");

// String concatenation
console.log("Hello, " + name + ". It's great to meet you!");

// String interpolation
console.log(`Hello, ${name}. It's great to meet you!`);


/* Arrays */

// *Q* - How can I create a list of strings?
let fruits = ["apple", "orange", "banana", "pear", "peach"];

// *Q* - How would I access the element 'banana'?
fruits[2];

/* Loops */

// For of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// For loop anatomy
// for (initialiser; condition; modifier) {
        // code to run
// }

for (let i = 0; i < 4; i++) {
  console.log(i);
}

// i++ -> i = i + 1

// fruits[0], fruits[1], fruits[2]...

for (let i = 0; i < 5; i++) {
  console.log(fruits[i]);
}

fruits.push("tomato");

// *Q* - Why will the following loop not print 'tomato'?
for (let i = 0; i < 5; i++) {
  console.log(fruits[i]);
}

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/* Logical Operators */

let age = 23;
let nationality = "American";

// I want to check that age is greater than 18 AND nationality is american
// *Q* - What operator can we use to achieve this?
if (age > 18 && nationality == "American") {
  console.log("You can vote!");
}

let hour = 12;
// *Q* - Can anyone remember the operator do a OR check?
if (hour < 10 || hour > 18) {
  alert("The office is closed.");
} else {
  alert("The office is open!")
}

let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office is closed.");
} else {
  alert("The office is open!")
}


/* Functions */

// Part 1 - Introduce functions as resuable blocks of code that group together similar code to perform a task
function greet() {
  console.log("Hello, World!");
}

let name1 = "Kishan";
console.log(`Hello ${name1}, welcome to CFG!`);

let name2 = "George";
console.log(`Hello ${name2}, welcome to CFG!`);

let name3 = "Michaela"
console.log(`Hello ${name3}, welcome to CFG!`);

// More clean and reusable way to write the above code
function greet(name) {
  console.log(`Hello ${name}, welcome to CFG!`);
}

greet(name1);
greet("Kishan");
greet("George");
greet("Michaela");

// Part 2 - Switch tracks to show functions with numbers
// remember that any code can go inside a function body
function add() {
  console.log(4 + 5);
}

// Introduce the concept of a return (function handing us back a value)
function add() {
  console.log(4 + 5);

  return undefined;
}

// *Q* - What do you expect to see in the console?
add();

// Note that we can add as many paramaters as we want.
function add(x, y) {
  return x + y;
}

// *Q* - What will be the output of invoking this function?
// Anything under the output of 7 in console? (why is there no undefined?)
add(2, 5);

// We can store the return value in a variable
let sum = add(10, 5);
console.log(sum);

// *Q* - What will be the value of newSum?
let newSum = add(3, 4) + add(6, 3); // newSum = 16
console.log(newSum);

// More real world example - reusable fahrenheit to celsius converter
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// Let try recreate some functionality of javascript with a custom function!
// Take a look at the console to show unstrict equality (1 == "1")
// We want a function to fix this and show strict equality

/*
1. Create function called isEqual which takes 2 paramaters
2. Check IF both paramaters are EQUAL in value AND type
3. IF they are equal, RETURN true
4. ELSE they are not equal so RETURN false
*/

function isEqual(a, b) {
  if (a == b && typeof (a) == typeof (b)) {
    return true;
  } else {
    return false;
  }
}

/* Multiple ways to write the above function

1) A cleaner return
function isEqual(a, b) {
    if (a == b && typeof(a) == typeof(b)) {
        return true;
    }

    return false;
}

2) Perhaps the most succint, just return the value from the boolean expression!
function isEqual(a, b) {
    return a == b && typeof(a) == typeof(b);
}

*/

/* Scope */

// Scope determines the visibility of our variables.
// Any variables declared in a function cannot be accessed from outside. (function scope)
// We can access variables from outside a function however (global scope)
// Dont worry too much about this concept, think of it like a 2 way mirror
// Variables outside see the mirror but variables inside see glass

let citizen = "brooks";

function jail() {
  let prisoner = "andy";
  console.log(citizen);
}

jail();
console.log(prisoner);
