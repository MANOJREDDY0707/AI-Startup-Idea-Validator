import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const createIdea = (data) => API.post("/ideas", data);
export const getIdeas = () => API.get("/ideas");
export const getIdeaById = (id) => API.get(`/ideas/${id}`);
