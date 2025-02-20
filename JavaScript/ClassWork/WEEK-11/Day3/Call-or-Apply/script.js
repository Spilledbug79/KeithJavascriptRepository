//1️⃣ Call a Function with Different Objects
// //Question: What will be the output of the two call() statements?
// const person1 = { name: "Alice" };
// const person2 = { name: "Bob" };

// function introduce() {
//     console.log(`Hi, my name is ${this.name}`);
// }

// introduce.call(person1);  // What will this output? Hi, my name is Alice
// introduce.call(person2);  // What will this output? Hi, my name is Bob




//2️⃣ Passing Arguments Using call()
//Question: What does call() do in this case, and what will be logged? Hello, my name is Charlie!

// const user1 = { name: "Charlie" };

// function greet(greeting, punctuation) {
//     console.log(`${greeting}, my name is ${this.name}${punctuation}`);
// }

// greet.call(user1, "Hello", "!");  




// //3️⃣ Using apply() with an Array of Arguments
// //Question: What is the difference between call() and apply() here? Hi and "." is an array
// const user2 = { name: "David" };

// function greet(greeting, punctuation) {
//     console.log(`${greeting}, my name is ${this.name}${punctuation}`);
// }

// greet.apply(user2, ["Hi", "."]);





//4️⃣ Using apply() with Math.max()
//Question: What will be logged, and why is apply() useful here? 15, you could use it as a passing arguement array in a parameter

// const numbers = [3, 8, 1, 15, 6];

// const max = Math.max.apply(null, numbers);
// console.log(max);




//5️⃣ Borrowing a Method from Another Object
//Question: What will be logged, and why does call() change the value of this? just the name

// const user3 = { name: "Emma" };
// const user4 = { name: "Daniel" };

// const userInfo = {
//     name: "Unknown",
//     getName: function() {
//         return this.name;
//     }
// };

// console.log(userInfo.getName.call(user3));  
// console.log(userInfo.getName.call(user4));  





//6️⃣ Using call() in a Constructor Function
//Question: What will student1 contain, and how does call() help here? student1 = {name: "Sophia", age: 21, grade: "A"} 
// It borrows a method from another object.

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// function Student(name, age, grade) {
//     Person.call(this, name, age);
//     this.grade = grade;
// }

// const student1 = new Student("Sophia", 21, "A");
// console.log(student1);





//7️⃣ Using apply() to Merge Arrays
//Question: What will be the final value of arr1, and why does apply() work here? [ 1,2,3,4,5,6] you can pass in arrays as arguements in a parameter

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// Array.prototype.push.apply(arr1, arr2);
// console.log(arr1);




// //8️⃣ Setting this in a Delayed Function
// //Question: Will this work correctly? If not, how can you fix it? no, it won't work, you need to use .bind(this) after the setTimeout function because the "this" keyword is global when using the setTimeout function.

// const user = {
//     name: "Keith",
//     sayHello: function() {
//         setTimeout(function() {
//             console.log(`Hello, my name is ${this.name}`);
//         }.bind(this), 3000);
//     }
// };

// user.sayHello()




//9️⃣ Converting arguments into an Array Using apply()
//Question: What does this function do, and why do we use apply()? it adds up the numbers in the array, the apply() makes it work because the slice method only works for arrays in parenthesis.

// function sumAll() {
//     const numbers = Array.prototype.slice.apply(arguments);
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(sumAll(2, 4, 6, 8));




//🔟 Using call() with Object Methods
//Question: What will be logged, and why does call() work: you would get " Hi, I'm Olivia" from "New York". because when using the call() method , it invokes the argument you set in the parenthesis for a function, The first arguement is usually what the "this" keyword would refer too, the next arguement would individually be passed and so on.

const person = {
    name: "Jack",
    introduce: function(city) {
        console.log(`Hi, I'm ${this.name} from ${city}.`);
    }
};

const anotherPerson = { name: "Olivia" };
person.introduce.call(anotherPerson, "New York");
