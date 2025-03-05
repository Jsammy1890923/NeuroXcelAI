import { useState } from 'react';
import { sendUserQuery } from '../api/requests';

export default function Assistants() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await sendUserQuery(query);
    setResponse(data.response);
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-4">AI Assistants</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          className="p-2 border rounded w-full"
          placeholder="Ask the AI something..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
      {response && (
        <div className="border p-4 rounded-lg mt-4">
          <h2 className="text-2xl font-bold">AI Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

