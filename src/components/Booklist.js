import React, {  useContext } from 'react';
import { Authcontext } from '../contexts/Authcontext';
import {BookContext} from "../contexts/Bookcontext"
import { ThemeContext } from '../contexts/ThemeContext';
import BookDetails from './BookDetails';






const BookList = () => {
        const  {lightTheme, light, dark} = useContext(ThemeContext);
        const theme = lightTheme ? light:dark;
        const {books} = useContext(BookContext);
    return books.length ? ( 
        <div style={{background:theme.bg, color:theme.color }} className='book-list'> 
        <ul>
          {books.map(book =>{
              return (<BookDetails book={book}  key={book.id}/>)})}
        </ul>
    </div> ) : (<div className="empty">Hello! It's time to read</div>)
}
 
export default BookList;

