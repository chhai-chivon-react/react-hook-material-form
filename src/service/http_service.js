import axios from "axios";

axios.interceptors.response.use(
  (response) => {
      console.log("Http response: ",response.data)
    return Promise.resolve(response);
  },
  (error) => {
    const { error: errorMessage } = error.response.data;
    
    return Promise.reject(errorMessage!==undefined?errorMessage:error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
};
