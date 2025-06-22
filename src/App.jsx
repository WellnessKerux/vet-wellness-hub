import React, { useState } from 'react';

const articles = [
  { id: 1, title: 'Holistic Nutrition for Dogs', content: 'Whole foods, bone broth, probiotics...' },
  { id: 2, title: 'Natural Remedies for Cat Anxiety', content: 'Chamomile, pheromone diffusers, and calming herbs...' },
  { id: 3, title: 'How to Support Joint Health in Older Dogs', content: 'Glucosamine, omega-3s, turmeric...' }
];

export default function VetWellnessHub() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = articles.filter(a =>
      a.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-green-50 text-brown-800 font-sans p-6">
      <div className="max-w-2xl mx-auto text-center">
        <img src="/logo.png" alt="Vet Wellness Hub" className="w-32 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Vet Wellness Hub</h1>
        <p className="text-lg mb-6">Find holistic healing resources for your pets</p>
        <input
          type="text"
          className="border p-2 w-full rounded mb-4"
          placeholder="Search for dog or cat wellness tips..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={handleSearch}
        >
          Search
        </button>
        <div className="mt-6 text-left">
          {results.length > 0 ? results.map(article => (
            <div key={article.id} className="mb-4 border p-4 rounded bg-white shadow">
              <h2 className="font-semibold text-xl">{article.title}</h2>
              <p className="mt-2 text-sm">{article.content}</p>
            </div>
          )) : <p className="text-sm text-gray-500">No articles found. Try a different search.</p>}
        </div>
      </div>
    </div>
  );
}
