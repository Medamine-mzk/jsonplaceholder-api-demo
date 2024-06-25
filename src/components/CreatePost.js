// src/components/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectue une requête POST pour créer un nouveau post
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: title,
      body: body,
      userId: 1
    })
      .then(response => {
        // Met à jour l'état avec la réponse reçue
        setResponse(response.data);
      })
      .catch(error => {
        // Gère les erreurs de la requête
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default CreatePost;
