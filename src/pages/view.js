import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Anavbar from './anavbar';
import "../assets/view.css"

const View = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8080/getbook'); // Replace with the actual endpoint for fetching all books
      setBooks(response.data);
    } catch (error) {
      console.error('Error occurred while fetching books:', error);
      // Handle error, show an error message or something
    }
  };

  return (
    <div>
        <Anavbar />
      <h2 className='head-view'>All Books</h2>
      {books.map((book) => (
        <div key={book.id} className="book-container">
          <img src={book.image} alt={`Cover of ${book.title}`} className="book-cover" />
          <div className="book-details">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            {/* Render other book details here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default View;
