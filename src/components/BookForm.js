import React, {useContext, useState} from 'react';
import {BookContext} from "../contexts/Bookcontext"
import { ThemeContext } from '../contexts/ThemeContext';

const NewBookForm = () => {
    const {lightTheme, light, dark} = useContext(ThemeContext);
    const theme = lightTheme? light : dark;

    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch({type:'ADD_BOOK',book: {title, author}});
        setAuthor('');
        setTitle('');
    };
    return ( 
             <form style={{background:theme.bg, color:theme.color }}  onSubmit={handleSubmit} >
                 <p>Add New Book</p>
            <input style={{background:theme.bg, color:theme.color}} type="text" placeholder='Book Tile' value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input style={{background:theme.bg, color:theme.color }}  type="text" placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input  type="submit" value="Add Book" />
        </form>
     );
    }

export default NewBookForm;