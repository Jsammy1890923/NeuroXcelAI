import { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../../api/requests';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const data = await fetchBlogPosts();
      setPosts(data);
    }
    loadPosts();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="border p-4 mb-4 rounded-lg">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p>Loading blog posts...</p>
      )}
    </div>
  );
}

