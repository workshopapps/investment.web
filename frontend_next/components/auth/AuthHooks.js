import axios from "axios";
import { useRouter } from "next/router";

const useApiService = () => {
  const baseUrl = "https://api.yieldvest.hng.tech";
  const router = useRouter();

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
          sessionStorage.setItem("destination", router.pathname);
          router.push("/login");
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
