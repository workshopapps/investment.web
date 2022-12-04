import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState({
        email: '',
        name: ''
    });

    const logout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem('accessToken');
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                accessToken: accessToken,
                setAccessToken: setAccessToken,
                setIsLoggedIn: setIsLoggedIn,
                user: user,
                setUser: setUser,
                logout: logout
            }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
