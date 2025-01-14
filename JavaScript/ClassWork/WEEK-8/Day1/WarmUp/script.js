
// 2. functions
function greet(name){
  return  "Hello, " + name + "!";
}
console.log(greet("Alice"));

// Loops

let text = "";

for (let i = 1; i < 6; i++) {
  text += i; 
}

console.log(text)

// Arrays

const fruits = ['apple', 'banana', 'cherry'];

fruits.push('date');

console.log(fruits);

console.log(fruits[2]);

console.log(fruits.length);

// conditionals

function evenOrOdd(num){
  if (num % 2 === 0){
    console.log(num + ' is even');
  } else {
    console.log(num + ' is odd');
  }
  }
    evenOrOdd(3)

    function timeOfLife(age){

      if( age >= 5 && age <=13){
      console.log("you are an adolescent.");
    } else {
      console.log("you are not an adolescent.");
    }
    }
  
    timeOfLife(13);

    

