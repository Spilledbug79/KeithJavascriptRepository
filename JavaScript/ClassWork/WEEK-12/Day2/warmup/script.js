// 1. Change Text Content
// Write JavaScript to change the text inside this <p> element to "Hello, students!" when the page loads.

let greeting = document.addEventListener("DOMContentLoaded", function() {
  greet = document.getElementById("greeting").textContent = "Hello, Students";
})
  


//Hint: Use document.getElementById() and textContent.

// 2. Hide an Element
// Using JavaScript, hide the following <div> when a button is clicked.

let container = document.getElementById('box')
hideBtn.addEventListener("click", function(){
  container.style.display ="none"
})


//Hint: Use style.display = "none"; inside an event listener.

// 3. Change Background Color on Click
// Make the background color of the page change to blue when the button is clicked.

 let colorButton = document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = "blue"
})

//Hint: Modify document.body.style.backgroundColor.

// 4. Count Button Clicks
// Write JavaScript to count how many times the button has been clicked and display the count inside the <span>.
let count = 0
document.getElementById('clickMe').addEventListener("click", function(){
  count++;
  document.getElementById("count").textContent = count
})




// Hint: Use a variable to store the count and textContent to update the <span>.

// 5. Remove an Element from the DOM
// When the button is clicked, remove the paragraph below from the page.
document.getElementById("removeBtn").addEventListener("click", function(){
  document.getElementById("removeMe").remove()
})


// Hint: Use .remove() on the element.

// 6. Log Input Value to Console
// When the user types in the input field and presses enter, log the input's value to the console.

 let key = document.getElementById("userInput")
 key.addEventListener("keydown", function (event) {
  if (event.key === "Enter")
    console.log(this.value);
});

// Hint: Listen for "keydown" and check if event.key === "Enter".