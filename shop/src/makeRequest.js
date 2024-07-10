import axios from "axios";
import.meta.env;
const conf = {
  apiToken: import.meta.env.VITE_API_TOKEN,
  apiUrl: import.meta.env.VITE_API_URL,
  uploadUrl: import.meta.env.VITE_API_UPLOAD_URL,
};

// create a new instance of axios with a custom config
export const makeRequest = axios.create({
  baseURL: conf.apiUrl,
  headers: { Authorization: `Bearer ${conf.apiToken}` },
});
