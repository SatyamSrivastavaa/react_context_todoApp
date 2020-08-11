import React, { useContext } from 'react';

// context
import { ThemeContext } from '../context/ThemeContext.js';

export default function Navbar() {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{
            background: theme.ui,
            color: theme.syntax
        }}>
            <h1>Reading Todo List</h1>
        </nav>
    )
}
