//import displayData from './displayBook.js';
import { displayList, displayBookForm, displayContact } from './modules/toolbar.js';
import displayDate from './modules/date.js';

const bookTitle = document.getElementById('bookTilte');
const bookAuthor = document.getElementById('bookAuthor');
const btnAdd = document.getElementById('Add');
const formControl = document.getElementsByClassName('form-control');

let books = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  add() {
    const book = {
      title: bookTitle.value,
      author: bookAuthor.value,
    };
    books.push(book);
    localStorage.setItem('bookLists', JSON.stringify(books));
    return this.book;
  }

  deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem('bookLists', JSON.stringify(books));
    displayData();
    return this.book;
  }

  clearForm() {
    for (let i = 0; i < formControl.length; i += 1) {
      formControl[i].value = '';
    }
    return this.book;
  }
}

btnAdd.addEventListener('click', () => {
  const addBook = new Book('title', 'author');
  addBook.add();
  displayData();
});


function displayData() {
  let bookList = '';
  for (let i = 0; i < books.length; i += 1) {
    bookList += `<div class="book">
 <div>
  <td>${books[i].title}     
    </td>
    <td> by </td>
    <td>
    ${books[i].author}</td></div>
    <div>
    <button type="button" onClick="deleteBook(${i})" class="remove">Remove</button>
  </div>
   </div>
   `;
  }
  document.getElementById('listBook').innerHTML = bookList;
};

function deleteBook() {
  const dBook = new Book();
  dBook.deleteBook();
}

if (JSON.parse(localStorage.getItem('bookLists')) != null) {
  books = JSON.parse(localStorage.getItem('bookLists'));
  displayData();
} else {
  deleteBook();
}
function clearForm() {
  const clearForms = new Book();
  for (let i = 0; i < clearForm.length; i += 1) {
    clearForm[i].value = '';
    clearForms.clearForm();
  }
}
clearForm();

displayDate();

displayData();

document.getElementById('list').onclick = displayList;

document.getElementById('bookform').onclick = displayBookForm;

document.getElementById('contact').onclick = displayContact;