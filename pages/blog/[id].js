import { useRouter } from 'next/router';
import { fetchBlogPosts } from '../../api/requests';

export async function getStaticPaths() {
  try {
    const data = await fetchBlogPosts();
    if (!data || !Array.isArray(data)) throw new Error("Invalid data format");

    const paths = data.map((post) => ({
      params: { id: post.id.toString() },
    }));

    return { paths, fallback: "blocking" }; // Allow dynamic pages
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return { paths: [], fallback: "blocking" };
  }
}

export async function getStaticProps({ params }) {
  const data = await fetchBlogPosts();
  const post = data.find((p) => p.id.toString() === params.id);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
}

export default function Blog({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
