import axios from "axios";
const url = `http://localhost:8000`;
const API = axios.create({
  baseURL: url,
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});

export default API;