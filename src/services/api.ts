import apiClient from "./apiClient";

// GET all proverbs
export const getProverbs = (params?: { search?: string; category?: string }) =>
  apiClient.get("/proverbs", { params }).then((res) => res.data);

// GET proverb by id
export const getProverbsById = (id: number) => apiClient.get(`proverbs/${id}`);

// GET random proverb
export const getProverbRandom = () => apiClient.get(`proverbs/random`);

// POST proverb
export const createProverb = (data: Proverbs) =>
  apiClient.post("/proverbs", data);

// PUT proverb
export const updateProverb = (id: number, data: Proverbs) =>
  apiClient.put(`/proverbs/${id}`, data);

// DELETE proverb
export const deleteProverb = (id: number) =>
  apiClient.delete(`/proverbs/${id}`);

// GET categories
export const getCategories = () => apiClient.get("/categories");
