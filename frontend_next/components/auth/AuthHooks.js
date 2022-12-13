import axios from "axios";
import { useRouter } from "next/router";
import AuthContext from "./AuthContext";
import { useContext } from "react";

const useApiService = () => {
  const { baseApiUrl } = useContext(AuthContext);
  const router = useRouter();

  return (accessToken, isLoggedIn = false) => {
    const service = axios.create({
      baseURL: `${baseApiUrl}${isLoggedIn ? "/user" : ""}`,
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
