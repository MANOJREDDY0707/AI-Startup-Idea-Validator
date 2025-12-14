"use client";
import { useEffect, useState } from "react";
import { getIdeaById } from "../../services/api";

export default function IdeaDetail({ params }) {
  const [idea, setIdea] = useState(null);

  useEffect(() => {
    getIdeaById(params.id).then((res) => setIdea(res.data));
  }, []);

  if (!idea) return <p className="p-8">Loading...</p>;

  const a = idea.analysis;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{idea.title}</h1>

      <Section title="Problem" content={a.problem} />
      <Section title="Customer" content={a.customer} />
      <Section title="Market" content={a.market} />
      <Section title="Competitors" content={a.competitor.join(", ")} />
      <Section title="Tech Stack" content={a.tech_stack.join(", ")} />
      <Section title="Risk Level" content={a.risk_level} />
      <Section title="Profitability Score" content={a.profitability_score} />
      <Section title="Justification" content={a.justification} />
    </div>
  );
}

function Section({ title, content }) {
  return (
    <div className="mb-4">
      <h2 className="font-semibold">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
