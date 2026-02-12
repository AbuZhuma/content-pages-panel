import { toast } from "react-toastify";
import { api, type ApiError } from "../../shared/api/baseApi";
import type { StylesPayload } from "./types";

export const getStyles = async () => {
    try {
        const response = await api.get<StylesPayload>("/pages/styles")
        return response.data
    } catch (error) {
        const err = error as ApiError;
        const message = err.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}