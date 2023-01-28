import axios from "axios";

const instance = axios.create({
    baseURL: 'https://test.employee.tokoweb.xyz/api/',
});

instance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('authToken')
        if (token) {
            config.headers['Authorization'] = token
        }

        return config
    }
)

export default instance;