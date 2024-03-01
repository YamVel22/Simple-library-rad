//create a book constructor function
function book(title, author, year) {
  this.title = title;
  this.author;
  this.year;
}

//create a author constructor function
function author(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.book = [];
}

//adding a method to author prototype
Author.prototype.addBook = function (book) {
    this.book.push(book);
}

//create author and books object 


