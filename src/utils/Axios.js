import axios from "axios";
const url = `http://api.openweathermap.org/geo/1.0/`;
const API = axios.create({
  baseURL: url,
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});

export default API;