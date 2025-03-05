import API_BASE_URL from './config';

// Fetch blog posts from API
export async function fetchBlogPosts() {
  const response = await fetch(`${API_BASE_URL}/blog`);
  return response.json();
}

// Fetch pricing details from API
export async function fetchPricing() {
  const response = await fetch(`${API_BASE_URL}/pricing`);
  return response.json();
}

// Send user query to AI Assistant API
export async function sendUserQuery(query) {
  const response = await fetch(`${API_BASE_URL}/assistant`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
  return response.json();
}
