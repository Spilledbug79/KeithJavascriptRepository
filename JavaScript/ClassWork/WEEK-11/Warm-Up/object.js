// const student = {
//   age: 45,
//   grades: {
//     math: 70,
//     science: 80,
//     english: 75,
//     history: 90
//   }
// };

// let total = 0;
// let count = 0;

// for (let subject in student.grades) {
//   total += student.grades[subject];
//   count++;
//   }

//    let average = total/count;

//    console.log(average);

// const student = {
//     math: 70, 
//     science: 80,
//     english: 75,
//     history: 90
//  };

// let total = 0;
// let count = 0;

// for (let subject in student) {
//   total += student[subject];
//   count++;
//   }

//    let average = total/count;

//    console.log(average);
 
//  student.computer = student.science;
//  delete student.science;

//  console.log(student)
 
function  Animal (name, sound) {
  this.name = name;
  this.sound = sound;
 };

 Animal.prototype.makeSound = function () {
  return `${this.name} says ${this.sound}`;
 };

 const dog = new Animal('Dog', 'Woof!');
 
 console.log(dog.makeSound());
 
 const cat = new Animal ('Cat', 'Meow!');
 
 console.log(cat.makeSound());

 


 