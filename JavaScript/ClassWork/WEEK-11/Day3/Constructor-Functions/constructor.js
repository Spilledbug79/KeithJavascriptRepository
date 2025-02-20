//1. Create a Prototype Method
// Create a constructor function Person with a name property. Then, add a method greet() to its prototype that logs:
// "Hello, my name is [name]!"

// function Person (name) {
//     this.name = name}
    
//     Person.prototype.greet = function() {
//        return `Hello, my name is ${this.name}`
//     };

// const person1 = new Person("Keith");

// console.log(person1.greet());    

// // 2. Add a Prototype Method to an Existing Constructor
// // Create a Car constructor with brand and year properties. Then, add a prototype method getInfo() that returns:
// "This is a [brand] from [year]."

// function Car(brand, year){
// this.brand = brand,
// this.year = year
// };

// Car.prototype.getInfo = function (){
//     return `This is a ${this.brand} from ${this.year}.`
// };

// const myCar = new Car("Nissan", "2006");

// console.log(myCar.getInfo());

// 3. Modify a Built-in Prototype
// Extend JavaScript’s String prototype by adding a method reverse() that returns the string in reverse order.

// String.prototype.reverse = function() {
//   return this.split('').reverse().join('');
//   };
 

// console.log("hello".reverse()); // "olleh"
// console.log("world".reverse()); // "dlrow"


// 4. Create a Prototype Inheritance Chain
// Create a Shape constructor with a type property. Then, create a Rectangle constructor that inherits from Shape. Add a method describe() to the Shape prototype.
// Set up inheritance and test it

//  function Shape(type) {
//   this.type = type;
//  };
 
//  Shape.prototype.describe = function() {
//   return `This is a ${this.type} shape.`;
// };

// function Rectangle(width, height) {
//     Shape.call(this, type);
//     this.width = width;
//     this.height = height;
// };

// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;



//  const rect = new Rectangle(5 ,10);
//  console.log(rect.describe());




// 5. Add a Method to the Array Prototype
// Extend the Array prototype to add a method first() that returns the first element of an array.

// Add prototype method here

// Array.prototype.first = function () {
//   return this[0];
// }

// console.log([1, 2, 3].first()); // 1
// console.log(["a", "b", "c"].first()); // "a"



// 6. Check If an Object Has a Prototype Method
// Write a function hasPrototypeMethod(obj, methodName) that checks if a method exists on an object’s prototype (not directly on the object).


function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    return "Hello!";
};

// // Write the function here

function hasPrototypeMethod(obj, methodName) {
  return Animal.prototype.hasOwnProperty(methodName) && typeof Animal.prototype.speak === 'function'
  // return obj.hasOwnProperty(methodName) === false && methodName in obj && Object.prototype.hasOwnProperty.call(obj.__proto__, methodName);
}; 

const dog = new Animal("Dog");
 ggfr
console.log(hasPrototypeMethod(dog, "speak")); // true
console.log(hasPrototypeMethod(dog, "false")); // false
 

 
 
// 7. Override a Prototype Method
// Modify the Array prototype so that toString() returns "Custom Array" instead of the default.


// Override prototype method here

// Array.prototype.toString = function() {
//   return "Custom Array";
//   };


// console.log([1, 2, 3].toString()); // "Custom Array"


// // 8. Prevent Prototype Modification
// // Create an object User with a prototype method login(). Then, freeze the prototype so that no further methods can be added.


// function User(username) {
//     this.username = username;
// }

// Add prototype method here

// User.prototype.login = function (){
//   return `${this.username} has logged in`
// }

// const user1 = new User("Alice");
 
// Object.freeze(User.prototype);

// // Try adding a new method after freezing (should not work)
// User.prototype.logout = function() {
//     return `${this.username} has logged out`
//   };

// console.log(user1.login()); // "User logged in."
// console.log(user1.logout()); // undefined

// // 9. Use the Prototype Chain
// // Create a Vehicle constructor with a method move(). Then, create a Bike constructor that inherits from Vehicle and adds a method ringBell().

// function Vehicle(type) {
//     this.type = type;
//     };

// // Add prototype method here
//     Vehicle.prototype.move = function (){
//       return "the Bike is moving";
//     };

//     function Bike(brand) {
//     Vehicle.call(this, "Bike");
//     this.brand = brand;
//     };
   
//     Bike.prototype = Object.create(Vehicle.prototype);
    
//     Bike.prototype.constructor = Bike;
   
//     Bike.prototype.ringBell = function (){
//       return "Ring! Ring!";
//     };
// // Set up inheritance

// const myBike = new Bike("Giant");
// console.log(myBike.move()); // "The Bike is moving."
// console.log(myBike.ringBell()); // "Ring! Ring!"
 

// 10. Add a Prototype Getter Method
// Create a Book constructor with title and author. Add a getter method description to return:
"[title] by [author]"

// function Book(title, author){
// this.title = title;
// this.author = author;
// }

// Object.defineProperty(Book.prototype, "description", {
//   get: function(){
//     return `${this.title} by ${this.author}`;
//   }
// });

// const myBook = new Book("1984", "George Orwell");
// console.log(myBook.description)