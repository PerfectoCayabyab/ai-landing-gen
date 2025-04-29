"use client";

import { InputForm } from "@/components/InputForm";
import { useState } from "react";

export default function GeneratePage() {
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);

  async function handleGenerate(data: any) {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setGeneratedContent(result.content);
  }

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">AI Landing Page Generator</h1>
      <InputForm onSubmit={handleGenerate} />
      {generatedContent && (
        <div className="mt-10 p-6 bg-gray-100 rounded">
          <h2 className="text-xl font-bold mb-4">Generated Landing Page</h2>
          <pre className="whitespace-pre-wrap">{generatedContent}</pre>
          <button
            onClick={() => navigator.clipboard.writeText(generatedContent)}
            className="btn mt-4"
          >
            Copy HTML
          </button>
        </div>
      )}
    </div>
  );
}
