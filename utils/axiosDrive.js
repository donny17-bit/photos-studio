import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: `https://limitless-waters-45263.herokuapp.com/`,
});

// axiosApiIntances.interceptors.request.use(
//     function (config) {
//       config.headers = {
//         Authorization: `Bearer ${Cookies.get("token")}`,
//         // "Access-Control-Allow-Credentials": "true",
//         // "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
//       };
//       return config;
//     },
//     function (error) {
//       return Promise.reject(error);
//     }
//   );

export default axiosApiIntances;
