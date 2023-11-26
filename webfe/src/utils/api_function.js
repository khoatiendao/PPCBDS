import axios from "axios"
import { toast } from "react-toastify"


export const sendRequest = async (url, data, method) => {
    try {
        const repsonse = await axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: method,
            url: url,
            data: data
        })

        return repsonse
    } catch (error) {
        toast.error("Có gì đó sai vui lòng thử lại")
    }
}
export const sendRequestWithFile = async (url, data, method) => {
    try {
        const repsonse = await axios({
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            method: method,
            url: url,
            data: data
        })

        return repsonse
    } catch (error) {
        toast.error("Có gì đó sai vui lòng thử lại")
    }
}

