import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [light] = useState({
        syntax: '#555',
        ui: '#ddd',
        bg: '#eee'
    });
    const [dark] = useState({
        syntax: '#ddd',
        ui: '#333',
        bg: '#555'
    });

    return (
        <ThemeContext.Provider value={{isLightTheme, light, dark, setIsLightTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
