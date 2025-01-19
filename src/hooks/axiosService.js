import axios from "axios";

const axiosService= axios.create({
  baseURL: "https://plum-cod-632497.hostingersite.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosService;
