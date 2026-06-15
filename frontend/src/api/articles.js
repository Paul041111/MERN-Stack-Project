import api from "./axios";

// GET all articles
export const getArticles = () => api.get("/articles");

// CREATE article
export const createArticle = (data) => api.post("/articles", data);

// UPDATE article
export const updateArticle = (id, data) =>
  api.put(`/articles/${id}`, data);

// DELETE article
export const deleteArticle = (id) =>
  api.delete(`/articles/${id}`);