import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

// Your API functions
export const fetchJobs = () => api.get("/job-posts");

export const searchJobs = (text) => api.get(`/job-posts/${text}`);

export const createJobPost = (job) => api.post("/create-job-post", job);
