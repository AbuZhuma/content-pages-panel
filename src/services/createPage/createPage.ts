import { api, type ApiError } from "../../shared/api/baseApi";
import { defaultOnError, defaultOnSuccess, type ServiceBasicProps } from "../../types/servicesBasicProps";
import type { CreatePageServiceProps } from "./types";

export const createPage = async ({ data, onError, onSuccess }: ServiceBasicProps & CreatePageServiceProps) => {
  try {
    const res = await api.post("/pages", data);
    defaultOnSuccess("Page created!")
    if (onSuccess) {
      onSuccess("Page created!")
    }
    return res;
  } catch (error: unknown) {
    const err = error as ApiError;
    const message = err.response?.data?.message || "Something went wrong";
    defaultOnError(message)
    if (onError) {
      onError(message)
    }
  }
};
