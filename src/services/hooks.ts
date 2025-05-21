import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createProverb,
  deleteProverb,
  getCategories,
  getProverbRandom,
  getProverbs,
  getProverbsById,
  updateProverb,
} from "./api";

export const useProverbSearch = (filters?: {
  search?: string;
  category?: string;
}) => {
  return useQuery({
    queryKey: ["proverbs-search", filters],
    queryFn: () => getProverbs(filters),
    placeholderData: (prev) => prev,
  });
};

// Get proverb by id
export const useGetProverbById = (id?: number) => {
  return useQuery({
    queryKey: ["proverb-get", id],
    queryFn: async () => (id ? await getProverbsById(id!) : {}),
  });
};

// Get random proverb
export const useGetProverbRandom = () => {
  return useQuery({
    queryKey: ["proverb-random"],
    queryFn: () => getProverbRandom(),
  });
};

// Create a proverb
export const useCreateProverb = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Proverbs) => createProverb(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["proverbs-search"],
      });
    },
  });
};

// Update a proverb
export const useUpdateProverb = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Proverbs) => updateProverb(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["proverbs-search"],
      });
      queryClient.invalidateQueries({
        queryKey: ["proverb-get"],
      });
    },
    onError: (error) => {
      console.error("Mutation failed:", error);
      alert(`Error: ${error.message || "Something went wrong."}`);
    },
  });
};

// Delete a proverb
export const useDeleteProverb = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteProverb(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["proverbs-search"],
      });
    },
    onError: (error) => {
      console.error("Mutation failed:", error);
      alert(`Error: ${error.message || "Something went wrong."}`);
    },
  });
};

// Get Categories
export const useGetCategories = () => {
  return useQuery({ queryKey: ["categories"], queryFn: getCategories });
};
