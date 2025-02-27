//REGEX PRACTICE

// *1. Practice Exercises:

function containsJavaScriptCaseInsensitive(str) {
  const regex = /[a-z]/javascript || [A-Z]/javascript/
  return regex.test(str);
}

// Example usage:
const string1 = "This string contains JavaScript.";
const string2 = "nothing here.";
const string3 = "JAVASCRIPT is everywhere!";

console.log(containsJavaScriptCaseInsensitive(string1)); // true
console.log(containsJavaScriptCaseInsensitive(string2)); // false
console.log(containsJavaScriptCaseInsensitive(string3)); // true