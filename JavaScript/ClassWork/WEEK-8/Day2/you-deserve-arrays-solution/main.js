/******************
 * YOUR CODE HERE *
 ******************/
// 1. first Item 

function getFirstItemFrom(array){
  return array.shift();
}
  



// 2. last item

function getLastItemFrom(array){
 return array.pop();
} 
 
  

// 3. get Index of 3

  function getIndex3(array){
  if (array.length === 4 || array.length > 4){
      return (array[3])
  } else {  
 return (array.pop())
  }}
  
  
  
  
  // array thats more than or equal to 10



function isLongList(array){
 if(array.length >= 10){
   return true;
 } else {
   return false;
 }
}


// if first item is a number

function firstItemIsNumber(array){
   return typeof array[0] === 'number';}


// second character of third string


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
