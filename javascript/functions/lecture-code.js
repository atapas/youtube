
// 1. JavaScript Built-in Functions

// Displays an alert box with a message and an OK button
window.alert('Have a great learning ahead!');

// Displays a dialog box with a message and an OK and a Cancel button
window.confirm("Do you want to give this video a Like?");

// Scrolls the document to the specified coordinates
window.scrollTo(0, 300);

/*

Like this you have built-in functions(methods) for,

- Numbers
- Strings
- Arrays
- Booleans
- Dates

*/

// 2. Function Declarations or Definitions

// Define a simple function
function printMe() {
  console.log('printing...');
}

printMe();

// Function definition as expression
const printMe = function() {
  console.log('printing...');
}

printMe();

// A function with a parameter
function printThis(param) {
  console.log(`printing.... ${param}`);
}

printThis('JS Function Course');

// A function expression with parameter
const printThis = function(param) {
  console.log(`printing...${param}`);
}

printThis('JS Function Course');

// 3. Returning from a function

function sum(a, b) {
  return a + b;
}

// the above is same as
function sum(a, b) {
  const ret = a + b;
  return ret;
}

console.log(sum(2,4));

// Default Parameters - Allows the parameters to be initialized with
// default values, else the value is undefined.
function calc(a, b) {
  return (2 * (a + b));
}
calc(2,3); // 10
calc(2); // NaN


function calc(a, b=0) {
  return (2 * (a + b));
}
calc(2); // 4

// Rest Parameters - The rest parameter allows a 
// function to accept an indefinite number of arguments as an array.

function collectThings(x, ...y) {
  console.log(x);
  console.log(y);
}
collectThings(1,2,3,4,5,6,7,8,9);

// Rules
// a) A function definition can only have one rest parameter.
// b) The rest parameter must be the last parameter.

// 4. Arrow functions(fat arrow)

const add = (x, y) => x+y; // fat arrow syntax
add(10,5);

function add(x,y) {
  return x + y;
}
const add = function(x,y) {
  return x + y;
}

const add = (x,y) => x + y;

const printAdd = (x, y) => {
  const ret = x + y;
  return ret;
}

// An arrow function doesn't have it's own this - We will see this in the 
// upcoming video when discuss "this".

// 5. Nested Function
function outerFunction(){
  console.log("I am an Outer Function");
  function innerFunction(){
    console.log("I am an Inner Function");
  }
  innerFunction();
};
outerFunction();


// 6. Function Scope

/* 
  The scope rules:
  a. Variables defined inside a function can not be accessed anywhere outside of the function.
  b. A function can access all the variables inside the scope it is defined.
  c. The Rule b applies to nested functions as well
*/ 

// Rule a
function doSomething() {

  let x = 10;
  const Y = 20;
  var z = 30;

  console.log(x, Y, z);  
}
doSomething(); // 10 20 30

console.log(x); // Uncaught ReferenceError: x is not defined
console.log(Y); // Uncaught ReferenceError: Y is not defined
console.log(z); // Uncaught ReferenceError: z is not defined

// Rule b
var x = 10;
let y = 20;
const Z = 30;

function doSomething() {
  console.log(x, y, Z);
}
doSomething(); // 10 20 30

// Rule c
function firstLevelFunction() {
  let outerVar = "Outer";
  function secondLevelFunction() {
    return `Inner ${outerVar}`;
  };
  return secondLevelFunction();
}
firstLevelFunction(); // Inner Outer


// 7. Callback

function foo(bar) {
  // what is bar?
  // bar can be string, number, object, and event a function
  // if bar is a function..
  if(itsNight) {
    bar();
  }

  if(isDrinksOverCheckOnline) {
    bar();
  }
}
// So we can invoke foo as

foo(function() {
  console.log('bar');
})

// Now if this is complex for you..
const barFunc = function() {
  console.log('bar');
}
foo(barFunc);

// 8. Higher-Order Function(HOF)
// A Higher-Order Function is a regular function that takes one or more functions 
// as arguments and/or returns a function as a value from it.

// Define a function that takes a function as an argument.
function getCapture(camera) {
  // Invoke the passed function
  camera();
}

// Invoke the function by passing a function as an argument
getCapture(function(){
  console.log('Canon');
});

// A function return a function
// Define a function that returns a function
function returnFunc() {
  return function() {
    console.log('Hi');
  }
}

// Take the returned function in a variable.
const fn = returnFunc();
// Now invoke the returned function.
fn(); // logs 'Hi' in the console

// Alternatively - A bit odd syntax but good to know
returnFunc()(); // logs 'Hi' in the console

// JavaScript has popular HOF popular Array methods like, 
// map(), filter(), reduce(), find(), and many more.


// 9. Pure Function

// Pure: It is a function that produces the same output for the same input.

function sayGreeting(name) {
  return `Hello ${name}`;
}

// Impure
let greeting = "Hello";

function sayGreeting(name) {
  return `${greeting} ${name}`;
}

// 10. IIFE(Immediately Invoked Function Expressions)
// Immediately invoked functions are used when you want your code executed immediately after it's defined

// Let's start with anonymous functions

function () {
  alert("I am an Anonymous function");
}

() => {
  alert('This is arrow but anonymous');
}

// Grouping operator
()

(function () {
  console.log("I am an IIFE");
})();

// 11. Function Execution Stack - Callstack

// Case 1: Define three functions and execute one by one
function f1() {
}
function f2() {
}
function f3() {
}

f1();
f2();
f3();

// Case 2: Define three dependent functions and execute them
function f1() {
  // do something
}
function f2() {
  // do something
  f1();
}
function f3() {
  // do something
  f2();
}

f3();

// 12. Recursion
// A function refer and call itself.

function foo() {
  console.log('I am going to die!');
  foo();
}

const foo = function buz() {
  foo();
  //buz();
}

// Need a base condition
function recurse() {
  if(base_condition) {
    // Stop the recurtion
    return;
  }
  recurse();
}

function fetchWater(count) {
  if(count === 0) {
    console.log('No more attempts left!');
    return;
  }
  console.log('Fetching...');
  fetchWater(count-1);
}

fetchWater(5);



