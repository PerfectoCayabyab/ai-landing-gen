import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { productName, tagline, features } = await req.json();

  const prompt = `
    Write a landing page for a product.
    Product Name: ${productName}
    Tagline: ${tagline}
    Key Features: ${features}

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
      "HTTP-Referer": "http://localhost:3000",
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
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }

  const dataResult = await response.json();
  console.log('OpenRouter Response:', dataResult);

  return NextResponse.json({ content: dataResult.choices[0]?.message?.content });
}
