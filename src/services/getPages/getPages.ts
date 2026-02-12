import { toast } from "react-toastify";
import { api, type ApiError } from "../../shared/api/baseApi";
import type { PageOutType } from "../../types/page.types";

export const getPages = async () => {
    try {
        const response = await api.get<PageOutType[]>("/pages")
        return response.data
    } catch (error) {
        const err = error as ApiError;
        const message = err.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}