import { createContext } from "react";

const authStructure = {
  baseApiUrl: "",
  isLoggedIn: false,
  accessToken: null,
  user: {
    email: "",
    name: "",
  },
  subscription: {
    isActive: false,
    type: "",
    canViewSmallCaps: false,
  },
  setUser: {}, // Function prototype: (user: object) => Any
  setSubscription: () => {}, // Function prototype: (subscription: object) => Any
  setAccessToken: {}, // Function prototype: (accessToken: string) => Any
  setIsLoggedIn: {}, // Function prototype: (isLoggedIn: bool) => Any
  logout: {}, // Function prototype: () => Any
};

const AuthContext = createContext(authStructure);

export default AuthContext;
