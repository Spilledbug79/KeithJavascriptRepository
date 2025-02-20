// 1. Selecting Elements
// 👉 Write a JavaScript statement that selects the first <h1> element in a webpage and changes its text content to "Welcome to JavaScript!".

let firstItem = document.querySelector('h1').textContent='Welcome to Javascript';

// 2. Changing Styles
// 👉 Select a paragraph (<p>) element with the id "intro" and change its text color to blue using JavaScript.

let item = document.getElementById('p')
item.style.color = "orange"

 // 3. Adding a New Element
// 👉 Write JavaScript code to create a new <button> element, set its text to "Click Me!", and add it to the body of the document.

let newButton = document.createElement('Button')
newButton.textContent.document.body.appendChild("Click Me!");


// 4. Removing an Element
// 👉 Suppose there is a <div> element with the id "container". Write JavaScript code to remove it from the document.

let oldContainer = document.getElementById('container')
oldContainer.remove()


// 5. Handling Click Events
// 👉 Write JavaScript code that selects a button with the id "myButton" and logs "Button clicked!" to the console whenever the button is clicked.

let button = getElementById('myButton')
button.addEventListener('click', function (){
  prompt("button clicked!")
})


// 6. Modifying Input Fields
// 👉 Suppose there's an <input> element with the id "nameInput". Write JavaScript code that sets its value to "John Doe" when the page loads.

let input = document.getElementById("input-item")
 newInput.value = "John Doe"