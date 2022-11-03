class Book{
  constructor(title,author)
  {
      this.title=title;
      this.author=author;
  } 
}
class UI {
  static displayBooks(){
      const books = Store.getBooks();
      books.forEach((book)=>UI.addBookToList(book));
  }
  static addBookToList(book) {
      const list =document.querySelector('.bookLists');
      const row =document.createElement('tr');
      row.innerHTML =
      `<td id="authorTitle"> <div class="raw-lists-header"> <h3>"${book.title}" by </h3>
      <h3>${book.author}</h3></td> </div>
    
      `;
      const createButton = document.createElement('td');
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-button');
  removeBtn.type = 'submit';
  removeBtn.innerText = 'Remove';
  createButton.appendChild(removeBtn);
  row.appendChild(createButton);
      list.appendChild(row);

  }
  static clearField(){
         document.querySelector('#title').value="";
      document.querySelector('#author').value="";
  }

  static deleteBook(el) {
      if (el.classList.contains('remove-button')) {
        el.parentElement.parentElement.remove();
      }
    }

 
}

//for storing 
class Store {
  static getBooks()
  {
      let books;
      if(localStorage.getItem("books")===null)
      {
          books=[];
      }
      else{
          books =JSON.parse(localStorage.getItem("books"));
      }
      return books;
  }
  static addBook(book)
  {
      const books=Store.getBooks();
      books.push(book);
      localStorage.setItem('books',JSON.stringify(books));

  }
  static removeBook(author)
  {
      const books=Store.getBooks();
      books.forEach((book,index)=>{
          if(book.author == author)
          {
            books.splice(index,1);
          }
      })
      localStorage.setItem('books',JSON.stringify(books));
      
  }
}

//display Books
document.addEventListener('DOMContentLoaded',UI.displayBooks);

//Event:Add a Book
document.querySelector('#add-new-book').addEventListener('submit',(e)=> 
{
    e.preventDefault();
    const title =document.querySelector('#title').value;
    const author =document.querySelector('#author').value;
    //instantiate

    const book =new Book(title,author);
    //Add book to list
    UI.addBookToList(book);
    Store.addBook(book);
    UI.clearField();
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  
    // document.querySelector('#title').value="";
    // document.querySelector('#author').value="";
})

//Event :Remove a Book
document.querySelector('.bookLists').addEventListener('click',(e)=> 
{
 UI.deleteBook(e.target);


});

//           //navigation for the all lists
       



  document.querySelector('#list').addEventListener('click',(e)=> 
{
   
    const storerSpace =document.querySelector('#bookStorer');
    const addSpace =document.querySelector('#filling-form-section');
    const contactSpace =document.querySelector('#contactpage');
    addSpace.style.display = 'none';
    contactSpace.style.display = 'none';
    storerSpace.style.display = 'block';


});
document.querySelector('#add-new').addEventListener('click',(e)=> 
{
   
    const storerSpace =document.querySelector('#bookStorer');
    const addSpace =document.querySelector('#filling-form-section');
    const contactSpace =document.querySelector('#contactpage');
    addSpace.style.display = 'none';
    contactSpace.style.display = 'none';
    addSpace.style.display = 'block';
    storerSpace.style.display = 'none';


});
document.querySelector('#contact-page').addEventListener('click',(e)=> 
{
   
    const storerSpace =document.querySelector('#bookStorer');
    const addSpace =document.querySelector('#filling-form-section');
    const contactSpace =document.querySelector('#contactpage');
    contactSpace.style.display = 'block';
    addSpace.style.display = 'none';
    storerSpace.style.display = 'none';


});