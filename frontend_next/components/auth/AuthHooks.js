import axios from "axios";
import { useRouter } from "next/router";
import AuthContext from "./AuthContext";
import { useContext } from "react";

const useApiService = () => {
  const { baseApiUrl, logout } = useContext(AuthContext);
  const router = useRouter();

  return (accessToken, isLoggedIn = false, forceLogout = true) => {
    const service = axios.create({
      baseURL: `${baseApiUrl}${isLoggedIn ? "/user" : ""}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      validateStatus: (statusCode) => statusCode >= 200 && statusCode <= 500,
    });

    service.interceptors.response.use(
      (res) => {
        if (res.status === 401 && forceLogout) {
          sessionStorage.removeItem("accessToken");
          sessionStorage.setItem("destination", router.pathname);
          logout();
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
