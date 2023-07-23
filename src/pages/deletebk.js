import React, { useState } from 'react';
import axios from 'axios';
import Anavbar from './anavbar';

const Delete = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = () => {
        if (!title || !author) {
            setMessage('Title and Author are required.');
            return;
        }

        axios
            .delete('http://127.0.0.1:8080/delete', { params: { title, author } })
            .then((response) => {
                setMessage(response.data);
                setTitle('');
                setAuthor('');
            })
            .catch((error) => {
                setMessage(error.response.data);
            });
    };

    return (
        <div>
             <Anavbar />
            <h2>Delete Book</h2>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <button onClick={handleDelete}>Delete Book</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Delete;
