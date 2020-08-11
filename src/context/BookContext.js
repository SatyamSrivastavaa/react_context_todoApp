import React, { useEffect, createContext, useReducer } from 'react';

// reducer
import { booksReducer } from '../reducer/booksReducer.js';

export const BookContext = createContext();

export default function BookContextProvider(props) {
    const [books, dispatch] = useReducer(booksReducer, [], () => {
        const booksList = localStorage.getItem('books');
        return booksList && booksList.length ? JSON.parse(booksList) : [];
    });
    
    useEffect(() => localStorage.setItem('books', JSON.stringify(books)), [books]);

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}
