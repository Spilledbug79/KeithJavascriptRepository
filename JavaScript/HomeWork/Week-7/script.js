//a true/false function if a number is greater than 10

let num = 0

function greater(num) {
  return num > 10;
}
 
console.log(greater(11)); 
 
//a function that compares if a given string is strictly equal to another string
 
str = ''

function strictlyEqualStr(str){
  return str === 'hello';
}
 
console.log(strictlyEqualStr('hello'));

//A function that is NOT strictly equal to '5'

let string = ''
 
function notStrictlyEqualStr(string){
  return string !== '5';
}
 
console.log(notStrictlyEqualStr('5'));

//Function that is equal or greater than the number 8

let x = 8

function between(x){
return x > 5 && x < 15;
}

console.log(between(x));

//function if string 'apple' is equal to 'orange' or 'apple'

let fruit = 'apple';
 
function equalFruits(fruit){
  return fruit == 'orange' || fruit == 'apple';
 }
 
 console.log(equalFruits(fruit));

 //Combining the && and the || to create a condition where at least one of two conditions is true, and the 3rd is also true.
 
 let a = "youAreCreative";
 let b = "youOwnAFastCar";
 let c = "youWonTheLottery";

  function yourStatus(a,b,c){
  if ((a || b ) && c){ 
     return ("You are rich!")
    } else {
   return ("You are NOT! rich") 
    }}
      
    console.log(yourStatus(a,b,0))

    //chained Boolean expression

    let n = 0

    function BooleanChain(n){
      return ( n > 5 && n < 20 ) || n == 25; 
    }
    
    console.log(BooleanChain(25

    ))

  // type of number

    console.log (typeof 42);

    // type of string

  console.log (typeof "Javascript");

    // type of Boolean  

  console.log (typeof true);

    // type of function

  console.log(typeof function(a, b){
    return a + b
  });

    // type of array, outputs = object

  console.log(typeof [1,2,3]);

  // type of object

  console.log (typeof {a:1});

  // type of null, outputs = object

  console.log (typeof null);

  //  100 to string

  let t = 100;
  let str1 = t.toString();
  console.log(str1);
 
console.log(typeof(str1))
  
 // convert false to a string
 
 let outcome1 = false;
 let outcome2 = outcome1.toString();
 console.log(outcome2);

 console.log(typeof(outcome2));

// program for user to enter a number and convert it to a string
   
let yourNum = 10;

function convertNum(yourNum){
  return yourNum.toString();
  }
 
  let result = convertNum(yourNum);
  console.log(result);

  console.log(typeof(result));

  // convert '123' to a number using both parsInt and Number functions
  let p = "123"
  parseInt(p);
  console.log(p)
  console.log(typeof(p))

  let numStr = "123";
  let newNumStr = Number(numStr);
  console.log(newNumStr);
  console.log(typeof(newNumStr));

  // Use parseInt to extract the number from the string '50px'

  let amount = "50px";
  let newAmount = parseInt(amount);
  console.log(newAmount);
  console.log(typeof(newAmount));

  // Bonus: Creating a small program that ask the user for their age:
  // using prompt() to get an input as a string
  // converts the input into a number using Number or parseInt
  // checks if the input is a valid number (not NaN) using Typeof.
  //if valid , checks if the age is greater then 18 and logs a 'message' based on the result

let age = 45;

function UserAge(Num){
  let strAge = prompt(Num);
    let numAge = Number(strAge);
    if (numAge === (typeof())
}

 






  