import { useRouter } from 'next/router';
import { fetchBlogPosts } from '../../api/requests';

export async function getStaticPaths() {
  const data = await fetchBlogPosts();
  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));
  
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await fetchBlogPosts();
  const post = data.find((p) => p.id.toString() === params.id);

  return { props: { post } };
}

export default function Blog({ post }) {
  const router = useRouter();
  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
