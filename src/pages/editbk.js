import React, { useState } from 'react';
import '../assets/addbk.css';
import axios from 'axios';
import '../assets/anavbar.css';
import Anavbar from '../pages/anavbar';

const Update = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genres, setGenres] = useState('');
  const [chapter, setChapter] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleGenresChange = (event) => {
    setGenres(event.target.value);
  };

  const handleChapterChange = (event) => {
    setChapter(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      title,
      author,
      genres,
      chapter,
      image,
      description,
    };

    try {
      // Make a PUT request to update the book by title and author
      const response = await axios.put('http://127.0.0.1:8080/updatebook', data);
      if (response.status === 200) {
        // Book updated successfully
        setErrorMessage('');
        // Clear the form fields after successful update
        setTitle('');
        setAuthor('');
        setGenres('');
        setChapter('');
        setImage('');
        setDescription('');
      }
    } catch (error) {
      if (error.response.status === 404) {
        // Book with matching title and author doesn't exist
        setErrorMessage('Book with the given title and author not found.');
      } else {
        // Other error occurred
        setErrorMessage('Error updating book.');
      }
    }
  };

  return (
    <div>
      <Anavbar />

      <div className="App1">
        <header className="App-header1">
          <form className="form1" onSubmit={handleSubmit}>
            <h2 className="add-head"> UPDATE BOOK </h2>
            <label className="label-cls">Title:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={title}
              required
              onChange={handleTitleChange}
            />
            <br />

            <label className="label-cls">Author:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={author}
              required
              onChange={handleAuthorChange}
            />
            <br />

            <label className="label-cls">Genres:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={genres}
              required
              onChange={handleGenresChange}
            />
            <br />

            <label className="label-cls">Chapter:</label>
            <br />
            <input
              className="ip-cls"
              type="number"
              value={chapter}
              required
              onChange={handleChapterChange}
            />
            <br />

            <label className="label-cls">Image:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={image}
              required
              onChange={handleImageChange}
            />
            <br />

            <label className="label-cls">Description:</label>
            <br />
            <input
              className="ip-cls"
              type="text"
              value={description}
              required
              onChange={handleDescriptionChange}
            />
            <br />
            <br />
            <button className="add-btn" type="submit">
              Update
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </header>
      </div>
    </div>
  );
};

export default Update;
