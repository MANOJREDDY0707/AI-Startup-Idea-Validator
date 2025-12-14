"use client";
import { useState } from "react";
import { createIdea } from "./services/api";
import { useRouter } from "next/navigation";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const submitIdea = async () => {
    const res = await createIdea({ title, description });
    router.push(`/idea/${res.data.id}`);
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Startup Idea Validator</h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Startup Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-3"
        rows={5}
        placeholder="Describe your startup idea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={submitIdea}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Validate Idea
      </button>
    </main>
  );
}
