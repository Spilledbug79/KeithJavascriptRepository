1. "What is the difference between var, let, and const? Can you give an example of when to use each one?"
var x = 10; 
let y = 20; 
const z = 30; 

var is a global scope variable that can be used either inside or outside a function.
let is a global scope or a local scope variable that can only be used locally if it is local.
const is a global or a local scope variable that doesn't change value.  

2. "What will the following code log to the console, and why?"

console.log("Hello" + 5); Hello5;
console.log(10 + "20"); 1020
console.log("5" - 1); 4

3. "What is the output of this function, and why?"

function greet(name = "Stranger") {
  return `Hello, ${name}!`;
}
console.log(greet());
console.log(greet("Alice"));

Hello, Stranger;
Hello, Alice;