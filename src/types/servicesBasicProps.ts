import { toast } from "react-toastify"

export type ServiceBasicProps = {
    onSuccess?: (msg: string) => void,
    onError?: (msg: string) => void
}

export const defaultOnSuccess = (message: string) => {
    toast.success(message)
}

export const defaultOnError = (message: string) => {
    toast.error(message)
}