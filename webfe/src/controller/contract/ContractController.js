import { sendRequest, sendRequestWithFile } from "../../utils/api_function"
import { getContract, addContract } from "../../utils/auth/auth"



export const addContractController = async (data) => {
    const url = addContract.url
    const response = await sendRequest(url, data, "POST");
    return response
}
export const getContractController = async () => {
    const url = getContract.url
    const response = await sendRequest(url, null, "GET");
    return response
}