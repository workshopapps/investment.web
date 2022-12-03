import { createContext } from 'react';

const authStructure = {
    isLoggedIn: false,
    accessToken: null,
    user: {
        email: '',
        name: ''
    },
    setUser: {}, // Function prototype: (user: object) => Any
    setAccessToken: {}, // Function prototype: (accessToken: string) => Any
    setIsLoggedIn: {}, // Function prototype: (isLoggedIn: bool) => Any
    logout: {} // Function prototype: () => Any
};

const AuthContext = createContext(authStructure);

export default AuthContext;
