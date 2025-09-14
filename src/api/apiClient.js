import axios from 'axios'


const api = axios.create({
baseURL: import.meta.env.VITE_API_BASE || '/api',
timeout: 10000,
})


// add interceptors if needed
export default api