import React, { useContext } from 'react';

// components
import BookDetails from './BookDetails.js';

// context
import { ThemeContext } from '../context/ThemeContext.js';
import { BookContext } from '../context/BookContext.js';

export default function BookList() {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {books} = useContext(BookContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div className="book-list" style={{
            background: theme.bg,
            color: theme.syntax
        }}>
            <ul>
                {books.length ? 
                    books.map(book => <BookDetails book={book} theme={theme} key={book.id} />) :
                    <h3>No books on the list as of now</h3>
                }
            </ul>
        </div>
    )
}
