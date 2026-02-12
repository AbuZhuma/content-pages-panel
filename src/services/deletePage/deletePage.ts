import { toast } from "react-toastify";
import { api, type ApiError } from "../../shared/api/baseApi";

export const deletePage = async (id: string) => {
    try {
        api.delete(`/pages/${id}`)
        toast.success("Page deleted!")
    } catch (error) {
        const err = error as ApiError;
        const message = err.response?.data?.message || "Something went wrong";
        toast.error(message);
    }
}