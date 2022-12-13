import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [baseApiUrl, setBaseApiUrl] = useState(process.env.NEXT_PUBLIC_API_URL);
  const [user, setUser] = useState({
    email: "",
    name: "",
  });
  const [subscription, setSubscription] = useState({
    isActive: false,
    type: "",
    canViewSmallCaps: false,
  });

  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("accessToken");
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        baseApiUrl: baseApiUrl,
        isLoggedIn: isLoggedIn,
        accessToken: accessToken,
        setAccessToken: setAccessToken,
        setIsLoggedIn: setIsLoggedIn,
        user: user,
        subscription: subscription,
        setUser: setUser,
        setSubscription: setSubscription,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
