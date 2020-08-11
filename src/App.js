import React from 'react';

// components
import Navbar from './components/Navbar.js';
import BookList from './components/BookList.js';
import ThemeContextProvider from './context/ThemeContext.js';
import ThemeToggle from './components/ThemeToggle.js';
import BookContextProvider from './context/BookContext.js';
import BookForm from './components/BookForm.js';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookContextProvider>
          <BookList />
          <BookForm />
        </BookContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
