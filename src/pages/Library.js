import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../Navbar';
import '../assets/Library.css';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  // Filter books based on search term
  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const addToWishlist = (bookId) => {
    // Implement the logic to add the book to the wishlist
    console.log(`Added book with ID ${bookId} to wishlist.`);
  };

  return (
    <div>
      <NavBar />
      <h2 className="head-view1">Library</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="book-gallery">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-container1">
            <img src={book.image} alt={`Cover of ${book.title}`} className="book-cover1" />
            <div className="book-details1">
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              {/* Render other book details here */}
              <button onClick={() => addToWishlist(book.id)} className="wishlist-button">
                Add to wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
