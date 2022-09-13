import axios from 'axios';
import { dishApiUrl } from '../constants/Constants';

export async function fetchDishes() {
    const response = await axios.get(dishApiUrl + 'getDishes')
    return response.data
}