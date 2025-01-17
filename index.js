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

addBookToLibrary('The Stranger', 'Albert Camus', 123, true, 'https://i.pinimg.com/236x/1e/41/ac/1e41ac43ba3556f962ca6f0baef52719.jpg');
addBookToLibrary('The Trial', 'Franz Kafka', 256, true, 'https://i.pinimg.com/236x/31/30/d7/3130d75c76cea6d83262794a4cf88b6c.jpg');
addBookToLibrary('The Bell Jar', 'Sylvia Plath', 244, true, 'https://i.pinimg.com/236x/2e/d8/e1/2ed8e17d003f3e572504d28aeaec132e.jpg');
addBookToLibrary('Notes from Underground', 'Fyodor Dostoevsky', 192, true, 'https://i.pinimg.com/474x/ca/f8/c1/caf8c1a9ce7e083725cc692f5e8dc6b1.jpg');
addBookToLibrary('The Plague', 'Albert Camus', 308, false, 'https://i.pinimg.com/236x/b8/32/51/b83251b2cde102692b6c457af4c98af6.jpg');
addBookToLibrary('The Brothers Karamazov', 'Fyodor Dostoevsky', 796, true, 'https://i.pinimg.com/474x/e0/53/6e/e0536edbe43c84903fc5c2189aca36f9.jpg');
addBookToLibrary('The Unbearable Lightness of Being', 'Milan Kundera', 320, false, 'https://i.pinimg.com/736x/e2/9c/25/e29c254d1eb42e663651165ecea9925f.jpg');
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 277, true, 'https://i.pinimg.com/236x/24/08/0e/24080eee533e92c25cb3b8e7d37284f5.jpg');

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


