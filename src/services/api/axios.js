import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",
        'X-client-Source': 'carambar-frontend'
    },  
})

export default api;