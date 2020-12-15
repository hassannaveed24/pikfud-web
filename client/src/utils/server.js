import axios from "axios";
export const baseURL = "https://pikfudbackend.herokuapp.com";

export const instance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});
