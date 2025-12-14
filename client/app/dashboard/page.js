"use client";
import { useEffect, useState } from "react";
import { getIdeas } from "../services/api";
import Link from "next/link";

export default function Dashboard() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    getIdeas().then((res) => setIdeas(res.data));
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submitted Ideas</h1>

      {ideas.map((idea) => (
        <Link key={idea.id} href={`/idea/${idea.id}`}>
          <div className="border p-3 mb-2 rounded hover:bg-gray-100 cursor-pointer">
            <h2 className="font-semibold">{idea.title}</h2>
            <p className="text-sm text-gray-500">{idea.created_at}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
