import axios from "axios";

const http = axios.create({
  baseURL: `http://${import.meta.env.VITE_API_SITE}`,
});

const https = axios.create({
  baseURL: `https://${import.meta.env.VITE_API_SITE}`,
});

export { http, https };
