import React, { useState, useContext } from 'react';

// context
import { BookContext } from '../context/BookContext.js';
import { ThemeContext } from '../context/ThemeContext.js';

export default function BookForm() {
    const { dispatch } = useContext(BookContext);
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_BOOK',
            payload: {
                title,
                author
            }
        });
        setAuthor('');
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="title" 
                value={title} 
                placeholder="Book title" 
                onChange={e => setTitle(e.target.value)}
                style={{
                    background: theme.bg,
                    color: theme.syntax
                }}
                required
            />
            <input 
                type="text" 
                name="author" 
                value={author} 
                placeholder="Book author"  
                onChange={e => setAuthor(e.target.value)}
                style={{
                    background: theme.bg,
                    color: theme.syntax
                }}
                required
            />
            <input
                type="submit"
                value="add book"
                style={{
                    background: theme.ui,
                    color: theme.syntax
                }}
            />
        </form>
    )
}
