//REGEX PRACTICE

// let text = "Is this all there is?";
// let pattern = /\s/g;
// let result = text.match(pattern);

// document.getElementById("demo").textContent = result;

// .split() method

//----------------------------------------------------------------------------------------------------------------------//

// Call Method:
 
// const person1 = {
//   name: "Alice",
//   age: 0,
//   greet: function(age) {
//   console.log(`Hello, my name is ${this.name} and I am ${age} years old.`); 
//   } 
// };

// const person3 = {
//   name: 'Keith',
//   age: 0,
//   goodbye: function() {
//   console.log(`${this.name} who is ${this.age} says bye`);
//   }
// }
  

//   const person2 = { name: "Bob" };
//   const person4 = { name: 'Sharon'};
//   const person6 = { name: "Wayne", age: 80}
  
//   person1.greet.call(person2, 25); // Output: Hello, my name is Bob and I am 25 years old.

//   person1.greet.call(person6)


//   //---------------------------------------------------------------------------------------------------------------//

    // Apply Method:

//   person1.greet.apply(person2, [25]); // Output: Hello, my name is Bob and I am 25 years old.


  // const numbers = [3, 7, 2, 9, 5]; 
  
  // // console.log(Math.max.apply(null, numbers));

  // math.max([numbers])

  //---------------------------------------------------------------------------------------------------------------------//

  // Binding Method:

  // const person3 = {
  //   name: "Charlie",
  //   greet: function() {
  //   console.log(`Hello, my name is ${this.name}.`);
  //   } };
    
  //   const greetKeith = person3.greet.bind(person3);
    
  //   // greetCharlie(); // Output: Hello, my name is Charlie.

  //   const person2 = {
  //     name: "Charlie",
  //    goodbye: function() {
  //     console.log(`${this.name} says goodbye`);
  //     } };

  //     const goodbyeSomeone = person2.goodbye.bind(person3)

  //     goodbyeSomeone()

    // const userFixed = {
    // name: "David", sayHello: function() {
    // setTimeout(function() {
    // console.log(`Hello, my name is ${this.name}`);
    // }.bind(this), 1000); } };
    
    // userFixed.sayHello(); // Output: Hello, my name is undefined (because `this` refers to the global object)
