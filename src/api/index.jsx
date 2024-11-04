import axios from "axios";
// const BASE_URL = "https://api.accuindex.com/api/v1/";
const BASE_URL = "https://cp.accu-index.com/api/v1";
const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

export const apiCall = {
  get: async (url, headerProps = {}) => {
    return instance
      .get(url, {
        headerProps,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
  post: async (url, data, headerProps = {}) => {
    return instance
      .post(url, data, {
        headerProps,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
};
