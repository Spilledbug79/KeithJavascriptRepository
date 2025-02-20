//1.Counting Up: Write a while loop that prints numbers from 1 to 10.
let x= 1
while(x <= 10){
console.log(x)
x++;
}


//2.Counting Down: Create a while loop that counts down from 10 to 1 and prints each number.
let count = 10
while( count >= 1){
  console.log(count)
  count--;
}

//3.Even Numbers: Write a while loop that prints all even numbers between 1 and 20.
let even = 1
while (even <= 20){
  if (even % 2 === 0) {
  console.log(even)
  }
  even++;
}



//4.Sum of Numbers: Calculate and print the sum of all numbers from 1 to 50 using a while loop.
let num = 1
let sum = 0
while (num <= 50) {
  sum += num;
  sum++
 
}



//5.BONUS User Input Validation: Prompt the user to enter a number greater than 100. Use a while loop to keep prompting until the user enters a valid number.

let number = prompt("Enter a number greater than 100")

while (number !== null && Number(number <= 100)) {
  number = prompt("Invalid Please Enter a Number Greater than 100")
}
console.log("Thank you", number);








