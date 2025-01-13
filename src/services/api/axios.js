import axios from "axios";




const api = axios.create({
    baseURL: "https://api-carembar.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
        'X-client-Source': 'carambar-frontend'
    },  
})

export default api;