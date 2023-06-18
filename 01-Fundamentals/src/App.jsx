import "./styles.css";
import { Book } from "./Book";
import { Books } from "./Books";

const BookList = () =>{
      
    return <>
    <h1>Best Selling Mangas</h1>
    <section className="booklist">
       {Books.map((bookNumber,index)=>{
        return <div>
            <Book {...bookNumber} key = {bookNumber.id} number ={index} />
        </div>
       })}

    </section>
    </>
}

export default BookList;