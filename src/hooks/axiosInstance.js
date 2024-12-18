import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://platinumbrothers.traffit.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
