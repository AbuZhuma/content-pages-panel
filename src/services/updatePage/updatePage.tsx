import { api, type ApiError } from "../../shared/api/baseApi";
import { defaultOnError, defaultOnSuccess, type ServiceBasicProps } from "../../types/servicesBasicProps";
import type { UpdatePageServiceProps } from "./types";

export const updatePage = async ({ data, slug, onError }: ServiceBasicProps & UpdatePageServiceProps) => {
  try {
    const res = await api.patch(`/pages/${slug}`, data);
    defaultOnSuccess("Page updated!")
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
