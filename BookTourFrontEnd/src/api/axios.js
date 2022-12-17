import axios from "axios";
const BASE_URL = "http://localhost:8080/api/v1/";
export default axios.create({
  baseURL: BASE_URL,
  // "Content-Type": "application/json",
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    // "Content-Type": "text/html; charset=utf-8",
    "Content-Type": "application/json",
  },
});
