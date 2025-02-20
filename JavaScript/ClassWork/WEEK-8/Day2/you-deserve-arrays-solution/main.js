/******************
 * YOUR CODE HERE *
 ******************/
// 1. first Item 

 

function getFirstItemFrom(array){
  return array.shift();
}
  console.log(getFirstItemFrom([ 1,2,3,4,5 ]));



// 2. last item

function getLastItemFrom(array){
 return array.pop();
} 
 
console.log(getLastItemFrom([1,2,3,4,5]));

// 3. get Index of 3

  function getIndex3(array){
  if (array.length === 4 || array.length > 4){
      return (array[3])
  } else {  
 return (array.pop())
  }}
  
  console.log(getIndex3([1]))
  
  
  4.// array thats more than or equal to 10



function isLongList(array){
 if(array.length >= 10){
   return true;
 } else {
   return false;
 }
}
console.log(isLongList([1,2,3,4,5,6,7,8,9,10,11]))

5.// if first item is a number

function firstItemIsNumber(array){
   return typeof array[0] === 'number';}

   console.log(firstItemIsNumber([1,2,3,4,'a']))


6.// second character of third string


function secondCharOfThirdString(array){
 return array[2][1]

}   

console.log(secondCharOfThirdString(['yes', 'we', 'have', 'no', 'bananas']))
     
 
  
        
  

 











/********************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
********************************************/



if (typeof getFirstItemFrom === 'undefined') {
 getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
 getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
 getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
 firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
 isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
 secondCharOfThirdString = undefined;
}




module.exports = {
 getLastItemFrom,
 getFirstItemFrom,
 getIndex3,
 firstItemIsNumber,
 isLongList,
 secondCharOfThirdString,
}
