// console.log(this);

// const car = {
//   brand: "Toyota",
//   getBrand: function() {
//   return this.brand;
//   }
//   };
//   console.log(car.getBrand());

  // function Person(name) {
  //   this.name = name;}

  //   Person.prototype.sayHello = 
  //   function () { return `Hello, my name is ${this.name}`;
  //   };
  //   const person1 = new Person("Alice"); 
  //   console.log(person1.sayHello());
    
    // Scenario 5

    // const user = {
    //   name: "Bob",
    //   greet: () => {
    //   return `Hello, ${this.name}`;
    //   } };
    //   console.log(user.greet());

      // function showInfo() {
      //   console.log(`User: ${this.username}`);
      //   }
      //   const user = {
      //   username: "Charlie"
      //   };
      //   showInfo.call(user);   


      // const user = {
      //   username: "Daniel",
      //   showName: function() {
      //   return `User: ${this.username}`;
      //   }
      //   };
      //   console.log(user.showName());


      // function Person(name) {
      //   this.name = name, 
      //   this.sayHello = () => { return (`Hello, my name is ${this.name}`);
      //   };
      // };
     
      // const individual2 = Object.create("person");
      //   individual2.sayHello("Keith")
        
      //   console.log(individual2.sayHello());

// let person = {
//   name: "",
//   age: 0,
//   month: "",
  
//   setInfo: function( name, age, month ) {
//   this.name = name;
//   this.age = age;
//   this.month = month;
//   }, 

  
  
//   greet: function() { 
//     return `My name is ${this.name}. I'm ${this.age} yrs old, and my favorite month is ${this.month}.`;
//     },
//  };

//  const person2 = Object.create(person);
// person2.setInfo("Keith", 45, "Mar");

// const person1 = Object.create(person)

// person1.setInfo("Alice", 30, "June");

// //  console.log(person2.greet());

//  const person3 = Object.create(person);
//  person3.setInfo("Sharon", 79, "Sept");
 
//  console.log(person3.greet());

//   console.log(person2.age);
//  console.log(person1.month);
//  console.log(person1.name);
 
//  const individual =Object.create(person);
//  person.setInfo("John",30,"Mar");

//  console.log(individual.greet())



// (Constructor Example)

// function Car(name) {//used with new key word
//   this.name = name;// assigns a unique name to each instance
//   this.comment = function() { // comment is duplicated for each instance
//   return `My vehicle is a ${this.name}!`;
//   }
//   };
  
//   const car1 = new Car("Toyota");
//   const car2 = new Car("Ford");
  
//   console.log(car1.comment()); // Output: My vehicle is a Toyota!
//   console.log(car2.comment()); // Output: My vehicle is a Ford!
 
//  console.log(car1);
//  console.log(car2);
 
// //  Each object has its own copy of comment(), which is inefficient.



// // (Prototype Example)


function Person(name) 

{ this.name = name; } 

Person.prototype.greet = function() {// Adding a shared method to the prototype
return `Hello, my name is ${this.name}!`;
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");
console.log(person1.greet()); // Output: Hello, my name is Alice! 
console.log(person2.greet()); // Output: Hello, my name is Bob!

console.log(person1);
console.log(person2);

console.log(person1.hasOwnProperty("greet"))
console.log("greet" in person1);



// greet() is not inside of the object itself.
// greet() is attached to Person.prototype.
// Both person1 and person2 inherit greet() from the prototype, saving memory.

// Creating an object with a prototype.

// const keyframe = {
//   location: "Morristown, TN",
//   greet: function() {
//     return `Hello, my name is ${this.name}`;
//   }
// };

// const person1 = Object.create(keyframe);
// person1.name = "John";
// console.log(person1.greet()); // Output: "Hello, my name is John"
// console.log(person1)

// const person2 = Object.create(keyframe);
// person2.name = "Jane";
// console.log(person2.greet()); // Output: "Hello, my name is Jane"
// console.log(person2)

// console.log(keyframe)
// console.log(keyframe.greet);
// console.log(keyframe.location);

// filter function


// function peopleFilter(mainGroup, userRole) {
//   if (userRole !== 'admin') {
//     return {}; // Return empty object if not admin
//   }

//   const allowedPeople = ['Sharon', "Adrian"]; // Define keys allowed for admin
//   const filteredHumans = {};

//   for (let whoEver in mainGroup) {
//     if (allowedPeople.includes(whoEver)) {
//       filteredHumans[whoEver] = mainGroup[whoEver];
//     }
//   }
//   return filteredHumans;
// }

// // Example usage:
// const mainGroup = {
//  "Keith": 'Morristown',
// "Sharon": 'Knoxville',
//  "Wayne": 'Knoxville',
//   "Tina": 'Crossville'
// };

// const adminUser = { role: 'admin' };
// const unknownUser = { role: 'user' };

// const adminView = peopleFilter(mainGroup, adminUser.role);
// const userView = peopleFilter(mainGroup, unknownUser.role);

// console.log(adminView); 
// console.log(userView); 
 

 



 
 
 