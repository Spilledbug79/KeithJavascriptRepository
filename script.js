// const colors = ["red", "green", "blue", "yellow"];

// for (let i=colors.length - 1; i >= 0; i--){

// console.log(colors[i])}

  
const integersOnly = function (num) {
  const integer= []
  for (let numbers of num) {
    if (numbers % 1 === 0) {
      integer.push(numbers);
    }
  }return integer;
}

console.log(integersOnly([4,5,6.2,5,4,-7,-8.23, 8/6]))

  
 


  
  

  


 