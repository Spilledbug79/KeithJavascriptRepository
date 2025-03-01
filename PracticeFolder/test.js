
// call()

// const person1 = {
//   name: "Alice",
//   greet: function(age) {
//   // console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);} 
// };
//   const person2 = { name: "Bob" };
  
//   person1.greet.call(person2, 25); 
//   // Output: Hello, my name is Bob and I am 25 years old.

//   // constructor

  // function Person(name, age) {
  //   this.name = name;
  //   this.age = age;
  //   this.sayHello = function() {
  //   console.log(`Hello, my name is ${this.name}`);
  //   };
  //   }
  //   const Human1 = new Person("Alice", 25);
  //   const Human2 = new Person("Bob", 30); 
  //   console.log(Human1.name); // Output: Alice 
  //   console.log(Human2.age); // Output: 30 
  //   Human1.sayHello(); // Output: Hello, my name is Alice



  // Prototype
//  function Person(name, age) {
// this.name = name; 
// this.age = age; } // Adding a method to the prototype
// Person.prototype.sayHello = function() { 
//   console.log(`Hello, my name is ${this.name}`);
// };
// const newPerson1 = new Person("Alice", 25);

// const newPerson2 = new Person("Bob", 30);

// newPerson1.sayHello(); // Output: Hello, my name is Alice 
// newPerson2.sayHello(); // Output: Hello, my name is Bob
 
//  let array = [1,2,3,4,5];

// classes

// class User {
//   constructor(email, name) {
//     this.email = email;
//     this.name = name;
//     this.number = 0;
//   };
// logIn(){ 
//   console.log(this.email, "just logged in");
//   return this;
//   };
// logOut(){
//   console.log(this.email, 'just logged out');
//   return this;
//   }; 
//   updateNumber(){
//     this.number++;
//     console.log(this.name, "has logged in", this.number, "of times");
//     return this;
//   };
 
// };

// class Admin extends User {
//       deleteUser(user){
//         users = users.filter(u => {
//           return u.email != user.email;
//         })
//       };
// };

// var userOne = new User("eatherlykeith@gmail.com", "Keith");
// var userTwo = new User("saunanny@gmail.com", "Sharon");
// var admin = new Admin("kewl_keith@att.net", 'Kewl');
// // userOne.logIn().updateNumber().logOut();

// admin.logIn();

// var users = [userOne, userTwo];
 
// // admin.delete(userTwo);

// // console.log(users);

 

// function showInfo() {
//   console.log(`User: ${this.username}`);
//   }
//   const user = {
//   username: "Charlie"
//   };
//   showInfo(user);

 

// const user = {
// username: "Daniel",
// showName: function () {
// return `User: ${this.username}`;
// }
// };
// console.log(user.showName()); // Fix this!


// function Person(name) {
//   this.name = name; this.sayHello = () => { return `Hello, my name is ${this.name}`;
//   };
//   } const person1 = new Person("Alice"); console.log(person1.sayHello());


// function Shape(type) {
//   this.type = type;
// }

// Shape.prototype.describe = function() {
//   return `This is a ${this.type} shape.`;
// }

// function Rectangle(width, height, type = "rectangle") {
//   // Call the parent constructor using 'call'
//   Shape.call(this, type);
//   this.width = width;
//   this.height = height;
// }

// // Inherit from Shape
// Rectangle.prototype = Object.create(Shape.prototype); 
// Rectangle.prototype.constructor = Rectangle; // Set constructor to Rectangle

// // Test
// const rect = new Rectangle(5, 10);
// console.log(rect.describe()); // Output: "This is a rectangle shape." 

//  console.log(rect)


// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.speak = function() {
//   return "Hello!";
// };

// // // Write the function here

// function hasPrototypeMethod(obj, methodName) {
// return Animal.prototype.hasOwnProperty(methodName) && typeof Animal.prototype.speak === 'function'
// } 

// const dog = new Animal("Dog");



// console.log(hasPrototypeMethod(dog, "speak")); // true
// console.log(hasPrototypeMethod(dog, "toString")); // false

// For-in Loop

// person = {
//   name: "Keith",
//   age: 45,
//   resident: "Morristown, TN"
// }

// for (let key in person) {
//   console.log(key + ": " + person[key]);
  // }

// for loop

// for (let i = 0; i < 5; i++) {
//   console.log("Iteration: " + i);
//   }

  // While Loop

//   let count = 5;
// while (count < 10 && count >= 5) {
// console.log("Count is " + count);
// count++;
// }

// // Do-While Loop

// let num = 0;
// do {
// console.log("Number: " + num);
// num++;
// } while (num < 3);

// Arrays

// let fruits = ["Apple", "Banana", "Cherry"];

// fruits.push("Orange");// add to end
// fruits.pop(); // remove from end
// fruits.unshift("Mango");// add to start
// fruits.shift();  // remove from start

// console.log(fruits)

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
//   }
 

// For Each

  // fruits.forEach( function (fruit) {
  //   console.log(fruit);
  //   });

    // For of Loop

    // for (let fruit of fruits) {
    //   console.log(fruit);
    //   }

      // Switch Statements

       
//    function workWeek(day){
//   switch (day) {
//   case "Monday": return("Start of the workweek.");
//   break;
//   case "Friday": return("Weekend is near!");
//   break;
//   default: return("It's a regular day.");
//   }; 
// }
   
//   console.log(workWeek("Monday")) 


 

// function SameDayOfWeek(futureDate, todaysDate){
//  if ( (futureDate - todaysDate) % 7 === 0 && todaysDate <= 28 && futureDate <= 28 ) { 
//     return "it 'IS' the same day of the week.";
//    } else {
//     return "it 'IS NOT' the same day of the week.";
//    }
// }

// console.log(SameDayOfWeek(28, 7 ));
 

 

// let firstWeek = [1,2,3,4,5,6,7,8];

//  function sameDayOfWeek(sameDay){
//   if (sameDay <= 21) {
//   for (let i = 1; i <= firstWeek.length; i++) {
//   console.log( i + sameDay )
//   } 
//   } else {
//     console.log("'NOT' in the month.")
//   }
//  };  
//   sameDayOfWeek(2)
   
 
// name = ["Mathew"]

// let greeting = document.getElementsByTagName('select option')
// let dropDown = document.hasAttributes("value")[1]
// let paragraph = document.querySelector('p')
 
// dropDown.addEventListener('click', function(){
//  paragraph.textContent = "hello"
// });

  

// paragraph.addEventListener('click', function(){
//   paragraph.textContent = "Hello";
// })
 

// document.getElementById("generate").addEventListener("click", function() {
//   let number = Math.floor(Math.random() * 100) + 1; let randomNumber = document.getElementById("randomNumber").innerText = `Random Number: ${number}`;
//  console.log(randomNumber)
// }); 

// let items = ["Pen", "Notebook", "Eraser"]; document.getElementById("showItems").addEventListener("click", function() {
//   let list = document.getElementById("itemList");
//   list.innerHTML = ""; // Clear existing list
//   items.forEach(item => {
//   let li = document.createElement("li"); li.innerText = item;
//   list.appendChild(li);
//   });
//   });

// document.getElementById("nameInput").addEventListener("input", function() {
//   let name = this.value;
//   document.getElementById("greeting").innerText = `Hello, ${name}! Welcome.`;
//   });

// document.getElementById("generateLucky").addEventListener("click", function() {
//   let name = document.getElementById("userName").value;
//   let luckyNumber = Math.floor(Math.random() * 100) + 1; document.getElementById("result").innerText = `Hello, ${name}! Your lucky number is ${luckyNumber}.`;
//   });
 

// console.log(Math.hypot(2, 4));

// function getRandomInt(min, max) { 
//   return Math.floor(5 * (max - min + 1)) + min; } 
//   console.log(getRandomInt(1, 100)); // Example: 42
 
// function getRandomInt(max, min){
//  return (1.02 * (max-min + 1) + min)
// };
// console.log(getRandomInt(100, 1))
// let randomNum = Math.floor(0.33 * (10 - 1 + 1)) + 1; 

// console.log(randomNum); 

//  let third = "thirdDay"
// function newDay(third){
//    third = "tommorrow"
//     }


//   console.log(newDay(third))

 
// const obj = {
//   method: function() {
//     console.log(this); // refers to obj
//   }
// };
// obj.method();

// function myFunction() {
//   console.log(this); // refers to the global object (window in non-strict mode, undefined in strict mode)
// }
// myFunction();

//  const person =  {
// name: "Keith",
//   greet: () =>  {
//   return `Hello, my name is ${this.name}!`;
//   }
//   };
     
// console.log(person.greet())

// function Person(name) {
//   this.name = name; this.sayHello = function() { return `Hello, my name is ${this.name}`;
//   };
//   } const person1 = new Person("Alice"); console.log(person1.sayHello());

//  button2 = document.getElementById('button2')

//   document.querySelector("button").addEventListener("click", function() { this.style.backgroundColor ="red"; });

//   button2.addEventListener('click', function(){
//     this.style.background ='green';
//   })
  
// function sayHello() {
//   console.log(`Hello, ${this.name}`);
//   }
//   const user = { name: "David" };
//   sayHello.call(user);


// RANDOM NUMBER AND ARRAY GENERATOR:
 

// function randomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//  return Math.floor(Math.random() * (max - min + 1)) + min
// };

// function randomArray(arrayLength, min, max) {
//    return Array(arrayLength).fill().map(num => randomInt( min, max )); 
  
// };
// let newArray = randomArray(3,2,3);
 
// document.querySelector('button').addEventListener('click', function(){
//   console.log(newArray)
// })

// document.querySelector("button").addEventListener("click", function(){
//   if ( newArray[0] === newArray[1] ){
//    alert("You Won!")
//   } else {
//     alert('You Lost')
//   }});
     
// document.querySelector('button').addEventListener('click', function(){
//   console.log(newArray)
// });


  //-----------------------------------------------------------------------------------//

  //-----------------------------------------------------------------------------------//
  
 //* How to display the result of a function to a web page.*

// function addNum(a, b){
//   return a + b;
// }

// let result = addNum(1, 2)
// let result2 = addNum(5, 3)
 
// document.getElementById('num').innerHTML = result2;
 
 // ---------------------------------------------------//
 
 //-----------------------------------------------------//
 
 
 ////search using (.test )

 

 
//  let regex = /cat\B/; 
//  let text = "category";
//  console.log(text.match(regex)); 
 

//  function word(words){
//   let regex = /(?<word>\w+)/;
  
//   return words.match(regex)
//  }
//  console.log(word( "Keith" ))
//  console.log (groups.word)

let words = ("Keith is really super duper great".split(' '));
   
let word = (words[3])

document.getElementById('word').textContent = word