function Book(title, author, year){
  this.title = title;
  this.author = author;
  this.year = year;
};

Book.prototype.getSummary = function () {
  console.log(`Hey ${this.title} was written by ${this.author} in ${this.year} `);
};

const myBook = new Book("Misery", "Stephen King", 2025);
myBook.getSummary();
console.log(myBook);

