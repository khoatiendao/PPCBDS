import { getProperty } from "../../utils/auth/auth";
import { sendRequest } from "../../utils/api_function"
export const getPropertyController = async () => {
    const url = getProperty.url
    const response = await sendRequest(url, null, "GET");
    return response
}