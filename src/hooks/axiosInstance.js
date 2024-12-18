import axios from "axios";

axios.defaults.baseURL = "https://platinumbrothers.traffit.com";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

const axiosInstance = axios.create();

export default axiosInstance;
