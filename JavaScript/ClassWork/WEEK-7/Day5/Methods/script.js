//Equal Ignores Case
function isEqualIgnoreCase(str1, str2) {
   return str1.toLowerCase() === str2.toLowerCase()
  }

 


//First Letter Capitalize
function capitalizeFirstLetter(str) {
   return str.charAt(0).toUpperCase() + 
   str.slice(1).toLowerCase();
  }

  


//Substring
function containsSubstring(str, substring) {
    return str.includes(substring);
  }

 

function containsSubstringIgnoreCase(str, substring) {

     return str.toLowerCase().includes(substring.toLowerCase
    ());  
      
    }

    console.log(containsSubstringIgnoreCase("JavaScript is awesome", "JAVASCRIPT"));

function getInitials(fullName) {
    const names = fullName.split(" ");  
    initials = '';

    for (const name of names){
      initials += name.charAt(0).toUpperCase() + ".";
      return initials;
    }
  }
   
   