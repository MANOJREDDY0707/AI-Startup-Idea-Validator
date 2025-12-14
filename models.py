from pydantic import BaseModel

class IdeaCreate(BaseModel):
    title: str
    description: str
