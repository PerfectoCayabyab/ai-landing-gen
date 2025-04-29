import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to AI Landing Page Generator</h1>
      <p className="text-lg text-gray-600">Click Generate in the menu to start creating your landing page!</p>
    </main>
  );
}