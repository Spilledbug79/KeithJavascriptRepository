// prototype
const car = {
  startEngine: function() {
    console.log ("The engine has started...");
  }
};

const tesla = Object.create(car);
// verify the prototype chain
console.log(Object.getPrototypeOf(tesla) === car );



