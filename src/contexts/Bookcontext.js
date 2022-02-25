import React, { createContext, useState} from 'react';
   export const BookContext = createContext();

const BookContextProvider = (props) => {
   
        // const [books, dispatch] = useReducer(bookReducer,[]);
        const { v4: uuidv4 } = require('uuid');
        const [books, setBooks] = useState([]);
        
        const addBooks = (title, author) => {
            setBooks([...books, {title: title , author:author, id:uuidv4()}]);
        }
        
        const removeBooks = (id) => {
            setBooks(books.filter(book => book.id !== id))
       }
    return (
            <BookContext.Provider value={{books,  addBooks, removeBooks}}>
                   {props.children}
            </BookContext.Provider>
      );
}
 
export default BookContextProvider;
