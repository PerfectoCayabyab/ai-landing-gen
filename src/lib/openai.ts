export async function generateLandingPageContent(data: {
    productName: string;
    tagline: string;
    features: string;
  }) {
    const prompt = `
      Write a landing page for a product.
      Product Name: ${data.productName}
      Tagline: ${data.tagline}
      Key Features: ${data.features}
  
      Provide:
      - Hero section (title, subtitle, CTA)
      - Features section (3-5 points)
      - Simple FAQ
      - Keep it minimal and modern.
    `;
  
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:3000", // or your real domain later
        "X-Title": "AI Landing Page Generator",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/chatgpt-4o-latest",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });
  
    if (!response.ok) {
      console.error('OpenRouter Error', await response.text());
      throw new Error('Failed to generate content');
    }
  
    const dataResult = await response.json();
    return dataResult.choices[0]?.message?.content;
  }
  