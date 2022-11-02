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
        `<td>${book.title}</td>
        <td>${book.author}</td>
        <td><a href="" class="delete">Remove</a></td>
        `;
        list.appendChild(row);

    }
    static clearField(){
           document.querySelector('#title').value="";
        document.querySelector('#author').value="";
    }
    static deleteBook(e){
        if(e.classllist.contains('delete')){
            e.parentElement.parentElement.remove();
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
  // console.log(e.target);

  });

















// class ui{

//     addBook(book){
//         const lists =document.querySelector('.bookLists');
//         const list  = document.createElement('tr');
//         list.innerHTML=
//         `<td>${book.title}</td>
//          <td>${book.author}</td>
//          <td><a href="" class="remove">Remove</a></td>
//         `;
//         lists.appendChild(list);
//     }
//     clearFields(){
//         document.getElementById('title').value="";
//         document.getElementById('author').value="";
//     };
// }
//     document.getElementById('form').addEventListener('submit',function(e){
       
//        const titleholder =  document.getElementById('title').value;
//        const authorholder = document.getElementById('author').value;
//        const book =new Book(titleholder,authorholder);
//        const ui = new userInterface();
//        ui.addBook(book);
//        ui.clearFields();


//     })



