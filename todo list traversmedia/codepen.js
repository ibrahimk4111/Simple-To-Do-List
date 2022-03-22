
// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }


  
  // UI Class: Handle UI Tasks
  
  const  addBookToList = (book)=> {
    
      const list = document.querySelector('#book-list');
      // const row = document.createElement('tr');
  
      list.innerHTML += `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      // list.appendChild(row);
    }
  
    //alert
  
      const showAlert = (message, className) => {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#book-form');
      container.insertBefore(div, form);
  
      // Vanish in 3 seconds
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }


  
  // Store Class: Handles Storage
const addBook = (book) => {
        
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
     

  //add book on localstorage
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));

 };
  
  // Event: Add a Book
  document.querySelector('.addBook').addEventListener('click', (e) => {
    // Prevent actual submit
    e.preventDefault();
  
    // Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
  
    // Validate
    if(title === '' || author === '' || isbn === '') {
      showAlert('Please fill in all fields', 'danger');
    } else {
      // Instatiate book
      const book = new Book(title, author, isbn);
  
      // Add Book to UI
      addBookToList(book);
  
      // Add book to store
      addBook(book);
  
      // Show success message
      // UI.showAlert('Book Added', 'success');
  
      // Clear fields
      
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#isbn').value = '';
    }
  });
  
  // Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }

  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();  
  }

});
    // Show success message
    // showAlert('Book Removed', 'success')
  