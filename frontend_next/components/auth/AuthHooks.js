import axios from "axios";

const useApiService = () => {
  const baseUrl = "https://api.yieldvest.hng.tech";

  return (accessToken) => {
    const service = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      validateStatus: (statusCode) => statusCode >= 200 && statusCode <= 500,
    });

    service.interceptors.response.use(
      (res) => {
        if (res.status === 401) {
          sessionStorage.removeItem("accessToken");
          window.location = "/login";
        }

        return res;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    return service;
  };
};

const data = {
  useApiService,
};
export default data;
