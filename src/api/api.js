import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://tastyfoods-api.vercel.app",
});

export default api;
