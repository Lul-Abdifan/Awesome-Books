class Book{
    constructor(title,author)
    {
        this.title=title;
        this.author=author;
    } 
}
class UI {
    static displayBooks(){
        const StoredBooks =[
            {
                title:'book 1',
                author:"hope"
            },
            {
                title:'book 1',
                author:"hope"
            }
        ];
        const books = StoredBooks;
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
    static deleteBook(a){
        if(a.classllist.contains('delete')){
            a.parentElement.parentElement.remove();
        }
    }
}

















  




























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



