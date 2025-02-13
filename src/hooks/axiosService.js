import axios from "axios";

const axiosService= axios.create({
  baseURL: "https://platinumbrothers.com.ph/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosService;
