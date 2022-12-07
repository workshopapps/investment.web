import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useContext } from "react";
import AuthContext from "./AuthContext";

const ProtectedPage = ({ children, strict = true }) => {
  const { logout, setIsLoggedIn, setAccessToken, setUser } =
    useContext(AuthContext);
  const navigate = useRouter().push;

  useEffect(() => {
    const localToken = sessionStorage.getItem("accessToken");
    if (localToken) {
      axios
        .get("https://api.yieldvest.hng.tech/user/profile", {
          headers: {
            Authorization: `Bearer ${localToken}`,
          },
          validateStatus: (statusCode) =>
            statusCode >= 200 && statusCode <= 500,
        })
        .then((res) => {
          if (res.status === 401) {
            sessionStorage.removeItem("accessToken");
            logout();
            if (strict) {
              navigate("/login");
            }
          }

          if (res.status === 200) {
            setIsLoggedIn(true);
            setAccessToken(localToken);
            setUser({
              email: res.data.email,
              name: res.data.name,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (strict) {
        if (strict) {
          navigate("/login");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
export default ProtectedPage;
