from fastapi import FastAPI
from models import IdeaCreate
from database import ideas_collection
from openai_service import analyze_idea
from bson import ObjectId
import json
from datetime import datetime

app = FastAPI(title="AI Startup Idea Validator")

@app.post("/ideas")
def create_idea(idea: IdeaCreate):
    ai_result = analyze_idea(idea.title, idea.description)

    try:
        ai_json = json.loads(ai_result)
    except:
        return {"error": "AI response parsing failed"}

    doc = {
        "title": idea.title,
        "description": idea.description,
        "analysis": ai_json,
        "created_at": datetime.utcnow()
    }

    result = ideas_collection.insert_one(doc)

    return {"id": str(result.inserted_id), "analysis": ai_json}


@app.get("/ideas")
def get_ideas():
    ideas = []
    for idea in ideas_collection.find():
        ideas.append({
            "id": str(idea["_id"]),
            "title": idea["title"],
            "created_at": idea["created_at"]
        })
    return ideas


@app.get("/ideas/{idea_id}")
def get_idea(idea_id: str):
    idea = ideas_collection.find_one({"_id": ObjectId(idea_id)})
    if not idea:
        return {"error": "Idea not found"}

    idea["_id"] = str(idea["_id"])
    return idea


@app.delete("/ideas/{idea_id}")
def delete_idea(idea_id: str):
    ideas_collection.delete_one({"_id": ObjectId(idea_id)})
    return {"message": "Deleted successfully"}
