import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/Bookcontext';

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);
    const  {lightTheme, light, dark} = useContext(ThemeContext);
    const theme = lightTheme ? light:dark;
    return (  
        <li style={{background:theme.ui}}>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
        <button className='remove-button'  onClick={()=> dispatch({type:'REMOVE_BOOK', id: book.id})}>Remove</button>
        </li>
       
    );
}
 
export default BookDetails;
