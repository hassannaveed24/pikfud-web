import axios from "axios";
export const baseURL = "https://www.pikfudbackss.com";
// export const baseURL = "https://pikfudbackend.herokuapp.com";
export const instance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export const getJobs = () =>
  instance.get("/admin/jobs").then((res) => res.data);
export const getJob = async ({ queryKey }) => {
  const [key, params] = queryKey;
  return instance
    .get(`/admin/jobs/single?_id=${params._id}`)
    .then((res) => res.data);
};

export const getBlogs = () =>
  instance.get("/admin/blogs").then((res) => res.data);
export const getBlog = async ({ queryKey }) => {
  const [key, params] = queryKey;
  return instance
    .get(`/admin/blogs/single?_id=${params._id}`)
    .then((res) => res.data);
};
