'use client';

import { useState } from 'react';

export function InputForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [productName, setProductName] = useState('');
  const [tagline, setTagline] = useState('');
  const [features, setFeatures] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ productName, tagline, features });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="input"
      />
      <input
        type="text"
        placeholder="Short Tagline"
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
        className="input"
      />
      <textarea
        placeholder="Key Features (comma separated)"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
        className="input"
      />
      <button type="submit" className="btn">
        Generate Landing Page
      </button>
    </form>
  );
}
