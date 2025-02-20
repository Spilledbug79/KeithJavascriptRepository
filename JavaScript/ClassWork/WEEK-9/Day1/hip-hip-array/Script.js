// let numbers = [1, 2, 3, 4, 5, 6];

 
// for (let i = 0; i > numbers.length; i++) {

//   if (numbers[i] % 2 === 0) {

//     console.log(`Even number: ${numbers[i]}`);

//   }

// }

// // Hands on Practice

// // Challenge 1:

// const colors = ['red','blue','green','yellow'];
// colors.forEach(color => {console.log(color)});

// // Challenge 2:

// const nums = [2, 4, 6, 8];

// nums.forEach(number => {console.log(number * number)});
    
 
 

// // Challenge 3:

// const mixedNumbers = [-3, 5, -1, 7, -10, 4];

// mixedNumbers.forEach(numVal => { if (numVal > 0){
//   console.log(numVal)
// }});


// Challenge 4:

const scores = [87, 92, 100, 76, 89]

// let highScores = scores.forEach(score => { if (score > 80) 
//   console.log(score)
// })

let sum =0;

scores.forEach((score) => sum += score);
console.log(sum)

let AverageScore = sum/scores.length;
console.log(AverageScore)
 






