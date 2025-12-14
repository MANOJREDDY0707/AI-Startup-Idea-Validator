import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

PROMPT_TEMPLATE = """
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

Startup Idea:
Title: {title}
Description: {description}
"""

def analyze_idea(title: str, description: str):
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": PROMPT_TEMPLATE.format(
                title=title,
                description=description
            )}
        ],
        temperature=0.7
    )

    return response.choices[0].message.content
