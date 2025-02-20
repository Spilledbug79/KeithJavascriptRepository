// Object Literal Prototype


const car = {
  model: '',
  year: 0,
  setInfo: function(model, year){
    this.model = model;
    this.year = year;
  },
  getInfo: function(){
    return `${this.model} was made in ${this.year}`;
  },
  startEngine: function(){
    return `${this.model} engine starting`;
  }
};
 

const nissan = Object.create(car);
 
 nissan.setInfo("nissan", 2006);
 
console.log(nissan.getInfo());
console.log(nissan.startEngine());


// Constructor Function

  function Person(name, age, birthday){
      this.name = name;
      this.age = age;
      this.birthday = birthday;
      
  };

  Person.prototype.greet = function(){
    return `My name is ${this.name}`;
  };
 
  const Person1 = new Person("Keith", 45, 1979);

  

  const Person2 = new Person("Harry", 30, 1980);

  console.log(Person1.greet());
  console.log(Person2.greet());

  console.log(Person1);
  console.log(Person2);

  
 
  
