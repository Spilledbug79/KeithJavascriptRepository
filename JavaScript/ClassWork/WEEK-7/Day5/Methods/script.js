// //Equal Ignores Case
// function isEqualIgnoreCase(str1, str2) {
//    return str1.toLowerCase() === str2.toLowerCase()
//   }
//     console.log(isEqualIgnoreCase("SHARON","sharon"));
  


// //First Letter Capitalize
// function capitalizeFirstLetter(str) {
//    return str.charAt(0).toUpperCase() + 
//    str.slice(1).toLowerCase();
//   }
//   console.log(capitalizeFirstLetter("eAThErLy"))
  


// //Substring
// function containsSubstring(str, substring) {
//     return str.includes(substring);
//   }
//   console.log(containsSubstring("coding is cool", "cool"))
 

// function containsSubstringIgnoreCase(str, substring) { return str.toLowerCase().includes(substring.toLowerCase());  
// }
// console.log(containsSubstringIgnoreCase("Javascript just made my DAY", "day"))

  
function getInitials(fullName) {
 const nameBreak = fullName.indexOf (' ');
if (nameBreak !== -1) {
  return fullName[0].toUpperCase() + '.' + fullName.charAt(nameBreak + 1).toUpperCase() + '.';
  } else {
    return '';
  }
      
   }
  
  console.log(getInitials("karen Underwood"))
 
 
  
 
 
   