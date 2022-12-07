import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState({
    email: "",
    name: "",
  });
  const router = useRouter();

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("accessToken");
    setAccessToken(null);
  };

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        if (sessionStorage.getItem("destination")) {
          const destination = sessionStorage.getItem("destination");
          sessionStorage.removeItem("destination");
          router.push(destination);
        } else {
          router.push("/");
        }
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        accessToken: accessToken,
        setAccessToken: setAccessToken,
        setIsLoggedIn: setIsLoggedIn,
        user: user,
        setUser: setUser,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
