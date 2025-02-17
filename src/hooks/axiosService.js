import axios from "axios";

const axiosService= axios.create({
  baseURL: "https://dashboard.platinumbrothers.com.ph/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosService;
