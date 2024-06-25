// src/components/DeletePost.js
import React, { useState } from 'react';
import axios from 'axios';

function DeletePost() {
  const [response, setResponse] = useState(null);

  const handleDelete = () => {
    // Effectue une requête DELETE pour supprimer un post
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
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
      <h1>Delete Post</h1>
      <button onClick={handleDelete}>Delete</button>
      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default DeletePost;
