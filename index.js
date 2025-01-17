const myLibrary = [];

function Book(title, author, pages, read, imageUrl) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; 
    this.imageUrl = imageUrl;
}

function addBookToLibrary(title, author, pages, read, imageUrl) {
  const book = new Book(title, author, pages, read, imageUrl);
  myLibrary.push(book)
  displayBooks()
}

addBookToLibrary('No Longer Human', 'Osamu Dazai', 304, true, 'https://i.pinimg.com/474x/88/00/25/88002513ef63d17d3afd5ed2ee24f4a6.jpg');
addBookToLibrary('Crime and Punishment', 'Fyodor Dostoevsky', 430, true, 'https://i.pinimg.com/474x/1b/46/e8/1b46e872ac035fa05f0d969c1dba600c.jpg');
addBookToLibrary('Thus Spoke Zarathustra', 'Friedrich Nietzsche', 368, false, 'https://i.pinimg.com/236x/47/04/aa/4704aa893c20577bceb7081053c3c6e1.jpg');
addBookToLibrary('The Metamorphosis', 'Franz Kafka', 120, false, 'https://i.pinimg.com/236x/29/17/6f/29176fb9a7e14fc536beab10b5791dba.jpg');

console.log(myLibrary)


function displayBooks () {
    const booksContainer = document.getElementById('books');
    booksContainer.innerHTML = ""

    myLibrary.forEach((book, index) => {
        
        const bookCard = document.createElement('div')
        bookCard.classList.add('bookCard')

        bookCard.innerHTML = `
            <div class="title">${book.title}</div>
            <div class="author">${book.author}</div>
            <div class="pages">${book.pages}</div>`

        bookCard.style.backgroundImage = `url(${book.imageUrl})`;

        booksContainer.appendChild(bookCard);
    })
}



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

        addBookToLibrary(title, author, pages, read, imageUrl)

        form.reset();

        popupOverlay.style.display = 'none';
    });
});


