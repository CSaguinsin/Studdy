import Axios from "axios";
const axiosInstance = Axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
    },
});
axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('auth_token')}`
    return config
  });
  
  axiosInstance.interceptors.response.use(response => {
    return response;
  }, error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('auth_token')
        // router.navigate('/login')
      return error;
    }
    throw error;
  })
export default axiosInstance;
  
