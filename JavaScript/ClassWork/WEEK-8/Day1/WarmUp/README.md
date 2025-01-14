1. Variables and Data Types
What will the following code output, and why?

let x = 5;   
let y = '5';   
* console.log(x == y); true, because the == is loosely strict so their both numbers
* console.log(x === y); NaN, because, the strict equality considers the "" strings


2. Functions
Write a function named greet that takes a name as a parameter and returns a greeting string like:
HINT: you can use string literals or concatenate
greet("Alice"); // Output: "Hello, Alice!"

function greet(name){
  return  "Hello, " + name + "!";
}
console.log(greet("Alice"));


3. Loops
Write a for loop that prints the numbers 1 to 5 in the console. HINT: look up for loops

let text = "";

for (let i = 1; i < 6; i++) {
  text += i 
}

4. Arrays
What will the following code output?

const fruits = ['apple', 'banana', 'cherry'];
* fruits.push('date'); 
['apple','banana', 'cherry', 'date']
* console.log(fruits[2]); 
cherry
* console.log(fruits.length);
4
5. Conditionals
Write a program that checks if a number is even or odd and logs the result to the console.




// Example input: 4
// Example output: "4 is even"