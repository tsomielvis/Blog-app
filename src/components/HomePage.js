import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const posts = [
    { id: 1, title: 'Industry Trends in 2024', excerpt: 'A deep dive into the latest industry trends.' },
    { id: 2, title: 'Innovative Technologies to Watch', excerpt: 'Exploring emerging technologies and their impact.' },
    { id: 3, title: 'Best Practices for Modern Development', excerpt: 'Guidelines for effective and efficient development.' },
  ];

  return (
    <div>
      <h1>Industry Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
