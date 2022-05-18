import axios from "axios"



const api = axios.create({

    baseURL: "http://localhost:8000/api"});
    
      api.interceptors.request.use(async config => {
        const token = localStorage.getItem('token')
        const tokenJWT = (token === localStorage.token ) ? true : null;
        console.log(tokenJWT)

        if (tokenJWT) {

          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
export default api