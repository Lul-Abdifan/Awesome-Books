let books =[];
class Collection{
    constructor(title,author)
    {
        this.title=title;
        this.author=author;
    } 
}
class Page {
    
    static displayOnPage(){
        
        const books = Store.getBooks();
        books.forEach((book, index)=>Page.addBookToPage(book,index));
    }
    static addBookToPage(book, index) {
        const list =document.querySelector('.bookLists');
        const row =document.createElement('tr');
        row.innerHTML =
        `<td id="authorTitle"> <div class="raw-lists-header"> <h3>"${book.title}" by </h3>
        <h3>${book.author}</h3></td> </div>
      
        `;
  const createButton = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.className='remove-button';
    removeBtn.type = 'submit';
    removeBtn.innerText = 'Remove';
    removeBtn.id=index
    createButton.appendChild(removeBtn);
    row.appendChild(createButton);
        list.appendChild(row);

    }
 static deleteBook(el) {
        if (el.className==='remove-button') {
          el.parentElement.parentElement.remove();
          books.splice(el.id,1)
          localStorage.setItem('books',JSON.stringify(books));
        }
      }
  
   
}

//for storing 
class Store {
    static getBooks()
    {
        const storage =localStorage.getItem("books");
    
        if(storage===null)
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
            localStorage.setItem('books',JSON.stringify(books));

        })
        
    }
}

  //display Books
  document.addEventListener('DOMContentLoaded',Page.displayOnPage);

  //Event:Add a Book
  document.querySelector('#add-new-book').addEventListener('submit',(e)=> 
  {
      e.preventDefault();
      const title =document.querySelector('#title').value;
      const author =document.querySelector('#author').value;
      //instantiate

      const book =new Collection(title,author);
      //Add book to list
      UI.addBookToPage(book);
      Store.addBook(book);
      document.querySelector('#title').value="";
      document.querySelector('#author').value="";
      Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    

  })

  //Event :Remove a Book
  document.querySelector('.bookLists').addEventListener('click',(e)=> 
  {
   Page.deleteBook(e.target);
  });


//           //navigation for the all lists
       
const storerSpace =document.querySelector('#bookStorer');
const addSpace =document.querySelector('#filling-form-section');
const contactSpace =document.querySelector('#contactpage');
const links =document.querySelectorAll('.nav-link');
class Navigation{
    
  
static changePage(identifier)
{
  switch(identifier){
 case 'List':
    {
       

    contactSpace.style.display = 'none';
    addSpace.style.display = 'none';
    storerSpace.style.display = 'block';
}
break;
case 'Add new':
{
    contactSpace.style.display = 'none';
    addSpace.style.display = 'block';
    storerSpace.style.display = 'none';
}
break;
default:
    {
    contactSpace.style.display = 'block';
    addSpace.style.display = 'none';
    storerSpace.style.display = 'none';

}
break;
}
}}

links.forEach((link) => {
    link.onclick = () => {
       
        Navigation.changePage(link.textContent);
    };
  });




//   for(let i=0;i<links.length;i+=1){
//     links.onclick=(e)=>{
        
//         Navigation.changePage(links.textContent);
//     }
//   }







