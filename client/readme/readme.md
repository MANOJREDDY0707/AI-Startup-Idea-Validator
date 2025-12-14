# 🚀 AI Startup Idea Validator

An AI-powered web application that helps founders validate startup ideas using structured analysis powered by LLMs.

This project was built as part of the **Schmooze Media – 24 Hour AI Assignment**.

---

## 🔍 Features

- Submit a startup idea (title + description)
- AI-generated structured validation report
- View all submitted ideas
- Detailed analysis per idea
- Clean JSON-based AI responses

---

## 🧠 AI Analysis Includes

- Problem identification
- Target customer
- Market overview
- Competitor analysis (3 competitors)
- Suggested MVP tech stack
- Risk level assessment
- Profitability score (0–100)
- Justification

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- Tailwind CSS
- Axios

### Backend
- FastAPI
- OpenAI API
- MongoDB (Atlas)
- Pydantic

---

## 🧾 AI Prompt Used

```text
You are an expert startup consultant.
Analyze the given startup idea and return ONLY valid JSON with fields:

problem
customer
market
competitor (exactly 3 competitors with one-line differentiation)
tech_stack (4–6 practical MVP technologies)
risk_level (Low/Medium/High)
profitability_score (0–100)
justification

Rules:
- Keep answers concise and realistic
- Return ONLY JSON
