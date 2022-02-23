import React, { createContext, useState} from 'react';
   export const BookContext = createContext();

const BookContextProvider = (props) => {

        const [books, setBooks] = useState([
            {title: "The way of the wind", id:1},
            {title: "Atomic Habits", id:2},
            {title: "The final empire", id:3}
        ])
    return (
            <BookContext.Provider value={{books}}>
                   {props.children}
            </BookContext.Provider>
      );
}
 
export default BookContextProvider;
