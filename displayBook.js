let books = [];
const displayData = () => {
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
      <button onClick="deleteBook(${i})" class="remove">Remove</button>
    </div>
     </div>
     `;
    }
    document.getElementById('listBook').innerHTML = bookList;
};

export default displayData;