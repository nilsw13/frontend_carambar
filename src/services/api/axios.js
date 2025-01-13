import axios from "axios";

const baseUrl =  import.meta.env.VITE_API_URL;


const api = axios.create({
    baseURL: "https://api-carembar.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
        'X-client-Source': 'carambar-frontend'
    },  
})

export default api;