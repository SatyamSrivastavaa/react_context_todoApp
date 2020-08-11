import React, { useContext } from 'react';

// context
import { BookContext } from '../context/BookContext.js';

export default function BookDetails({ book, theme }) {
    const { dispatch } = useContext(BookContext);
    
    return (
        <li 
            key={book.id}
            style={
                {
                    background: theme.ui
                }
            }
            onClick={() => dispatch({
                type: 'DELETE_BOOK',
                payload: book.id
            })}
        >
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    )
}
