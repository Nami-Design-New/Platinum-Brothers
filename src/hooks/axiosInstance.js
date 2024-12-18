import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://platinumbrothers.traffit.com",
  headers: {
    "Content-Type": "application/json",
    "X-Request-Page-Size": "10",
    "X-Request-Current-Page": "1",
  },
});

export default axiosInstance;
