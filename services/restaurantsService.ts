import axios from "axios";
import { restApiUrl } from "../constants/Constants";



export async function fetchRestaurants() {
    const response = await axios.get(restApiUrl + 'getRestaurants')
    return response.data
}
export async function updateRestaurant(params: { [key: string]: string }) {
    const args = { ...params };
    const response = await axios.post(restApiUrl + 'updateRestaurant', args);
    return response.data;
}

