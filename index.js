const myLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
}





function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book)
}

addBookToLibrary('No Longer Human', 'Osamu Dazai', 304, true);
addBookToLibrary('Crime and Punishment', 'Fyodor Dostoevsky', 430, true);
addBookToLibrary('Thus Spoke Zarathustra', 'Friedrich Nietzsche', 368, false);
addBookToLibrary('The Metamorphosis', 'Franz Kafka', 120, false);

console.log(myLibrary)

const booksInLib = myLibrary.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.read}`);
    
});


function addContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<h1>Hello, World!</h1><p>This is some dynamic content added via JavaScript.</p>';
}
