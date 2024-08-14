import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { id } = useParams();
  const posts = {
    1: { title: 'Industry Trends in 2024', content: 'Detailed insights into industry trends.' },
    2: { title: 'Innovative Technologies to Watch', content: 'A look at groundbreaking technologies.' },
    3: { title: 'Best Practices for Modern Development', content: 'Key practices for successful development.' },
  };

  const post = posts[id];

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
