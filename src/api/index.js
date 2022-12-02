import axios from "axios";
import { baseUrl } from "../urls";
export const getPosts = async () => { 
    try {
        const response = await axios.get(`${baseUrl}/posts`);
    if (response.data) {
        return {
            data: response.data,
            error: false
        }
    }else{
        return{
            data: null,
            error: false
        }
    }
        
    } catch (error) {
        return {
            data: null,
            error
        }
    }

}