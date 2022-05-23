import axios from "axios"

const api = axios.create({

    baseURL: "http://localhost:8000/api"});
    
      api.interceptors.request.use(async config => {
        const token = sessionStorage.getItem('token')
        const tokenJWT = (token === sessionStorage.token ) ? true : null;
        if (tokenJWT) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
      
export default api