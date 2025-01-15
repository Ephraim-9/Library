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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const booksContainer = document.getElementById('books');
    const popupOverlay = document.getElementById('popupOverlay');
    const openPopup = document.getElementById('openPopup');
    const closePopup = document.getElementById('closePopup');

    openPopup.addEventListener('click', function() {
        popupOverlay.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });

    popupOverlay.addEventListener('click', function(event) {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const read = document.getElementById('read').value;
        const imageUrl = document.getElementById('imgUrl').value;

        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
            <div class="title">${title}</div>
            <div class="author">${author}</div>
            <div class="pages">${pages}</div>
            <div class="read">${read}</div>
        `;
        bookDiv.style.backgroundImage = `url('${imageUrl}')`;

        booksContainer.appendChild(bookDiv);

        form.reset();

        popupOverlay.style.display = 'none';
    });
});


