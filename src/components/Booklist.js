import React, {  useContext } from 'react';
import { Authcontext } from '../contexts/Authcontext';
import {BookContext} from "../contexts/Bookcontext"
import { ThemeContext } from '../contexts/ThemeContext';





const BookList = () => {
        const  {lightTheme, light, dark} = useContext(ThemeContext);
        const theme = lightTheme ? light:dark;
        const {books} = useContext(BookContext);
    return ( 
        <div style={{background:theme.bg, color:theme.color }} className='book-list'> 
        <ul>
          {books.map(book =>{
              return (
                  <li style={{background:theme.ui}} key={book.id}>
                      {book.title}
                  </li>
              )
          })}
       
        </ul>
    </div>  
     );
}
 
export default BookList;

