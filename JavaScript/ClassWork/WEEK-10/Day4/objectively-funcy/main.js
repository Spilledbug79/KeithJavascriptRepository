// YOUR CODE GOES HERE!!!
/*************************/
// function getFirstName(obj){
// return obj.firstName
// }

// get first name
const getFirstName = obj => { 
  return obj.firstName;
  
}
console.log(getFirstName({firstName: 'John', lastName: 'Doe'}));
//  get last name

const getLastName = obj => {
  return obj.lastName;
}

console.log(getLastName({firstName: 'Alice', lastName: 'Smith'}));

// get full name

const getFullName = obj => {
  return obj.firstName + ' ' + obj.lastName;
}
console.log(getFullName({firstName: 'John', lastName: 'Doe'}));

// set first name

function setFirstName(person, newFirstName) {
 return  person.firstName = newFirstName;
};
    console.log(setFirstName({firstName: 'John', lastName: 'Doe'}, "Keith"));


// set age

function setAge(person, newAge){
  person.age = newAge;
  return person;
  }

  console.log(setAge({firstName: 'John', lastName: 'Doe', age: 39}, 10));

  // give birthday

  const giveBirthday = (obj) => {
    if( !obj.age){
      obj.age = 1;
    } else {
      obj.age += 1;
    } return obj;
  } 
    console.log(giveBirthday({firstName: 'Baby', lastName: 'Doe', age: 10}));

    // marry

     

      function marry(person1, person2){
      person1.married = true;
      person2.married = true;
      person1.spouseName = getFullName(person2);
      person2.spouseName = getFullName(person1);
       
    } 
    

    // divorce

    function divorce(person1, person2){
      person1.married = false;
      person2.married = false;
      delete person1.spouseName  
      delete person2.spouseName  
      return {person1, person2}
    }
     


/****************************/
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}



module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
