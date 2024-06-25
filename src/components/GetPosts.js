// src/components/GetPosts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GetPosts() {
  const [posts, setPosts] = useState([]);


  //useEffect est utilisé dans les composants fonctionnels, 
  //tandis que componentDidMount est utilisé dans les composants de classe. 
  useEffect(() => {
    // Effectue une requête GET pour récupérer les posts
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // Met à jour l'état avec les données reçues
        setPosts(response.data);
      })
      .catch(error => {
        // Gère les erreurs de la requête
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          // Affiche chaque post sous forme de liste
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default GetPosts;
