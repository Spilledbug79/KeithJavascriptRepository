/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function fizzy(num){
  if(num % 3 === 0 && num % 5 === 0){
    return 'FizzBuzz';
  } else if (
    num % 3 === 0){
      return 'Fizz';
    } else if (num % 5 === 0){
      return 'Buzz';
    } else {
      return num;
    }
  }

console.log(fizzy(6))


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
