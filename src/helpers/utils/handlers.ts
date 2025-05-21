// hooks/useMutationWithAlert.ts
import { useState } from "react";
import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
} from "@tanstack/react-query";
import type { AlertColor } from "@mui/material";

interface UseMutationWithAlertOptions<TData, TError, TVariables>
  extends UseMutationOptions<TData, TError, TVariables> {
  successMessage?: string;
  errorMessage?: string;
}

export const useMutationWithAlert = <
  TData = unknown,
  TError = unknown,
  TVariables = void
>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  {
    successMessage = "Action completed successfully",
    errorMessage = "Something went wrong",
    ...options
  }: UseMutationWithAlertOptions<TData, TError, TVariables>
): [
  UseMutationResult<TData, TError, TVariables>,
  { open: boolean; message: string; severity: AlertColor; close: () => void }
] => {
  const [alert, setAlert] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const mutation = useMutation<TData, TError, TVariables>({
    mutationFn,
    ...options,
    onSuccess: (data, variables, context) => {
      setAlert({ open: true, message: successMessage, severity: "success" });
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      setAlert({ open: true, message: errorMessage, severity: "error" });
      options?.onError?.(error, variables, context);
    },
  });

  return [
    mutation,
    { ...alert, close: () => setAlert((prev) => ({ ...prev, open: false })) },
  ];
};
