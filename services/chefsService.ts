import axios from "axios"
import { chefApiUrl } from "../constants/Constants"


export async function loadChefs() { 
    const response = await axios.get(chefApiUrl + 'getChefs')
    return response.data
    }