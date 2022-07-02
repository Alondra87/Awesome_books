export function displayList() {
  document.getElementById('titleLibrary').className = 'title';
  document.getElementById('listBook').className = 'library';
  document.getElementById('contactBook').className = 'hiddenContactBook';
  document.getElementById('addBook').className = 'hiddenAddBook';
}

export function displayBookForm() {
  document.getElementById('titleLibrary').className = 'hiddenTitle';
  document.getElementById('listBook').className = 'hiddelibrary ';
  document.getElementById('contactBook').className = 'hiddenContactBook';
  document.getElementById('addBook').className = 'addBook';
}

export function displayContact() {
  document.getElementById('titleLibrary').className = 'hiddenTitle';
  document.getElementById('listBook').className = 'hiddelibrary ';
  document.getElementById('contactBook').className = 'contactBook';
  document.getElementById('addBook').className = 'hiddenAddBook';
}
