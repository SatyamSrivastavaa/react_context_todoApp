import React, { useContext } from 'react';

// context
import { ThemeContext } from '../context/ThemeContext.js';

export default function ThemeToggle() {
    const { isLightTheme, setIsLightTheme } = useContext(ThemeContext);

    return (
        <button onClick={() => setIsLightTheme(!isLightTheme)}>Toggle the theme</button>
    )
}
