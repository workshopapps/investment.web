import React, { useState } from 'react';
import AuthContext from './AuthContext';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const baseUrl = 'https://api.yieldvest.hng.tech';

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState({
        email: '',
        name: ''
    });

    const getApiService = (requireAuthentication = true) => {
        const service = axios.create({
            baseURL: baseUrl,
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            validateStatus: (statusCode) => statusCode >= 200 && statusCode <= 500
        });

        if (requireAuthentication) {
            service.interceptors.response.use(
                (res) => {
                    if (res.status === 401) {
                        window.location = '/login';
                    }

                    if (res.status === 200) {
                        setIsLoggedIn(true);
                    }

                    return res;
                },
                (error) => {
                    console.log(error);
                }
            );
        }
        return service;
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                accessToken: accessToken,
                setAccessToken: setAccessToken,
                setIsLoggedIn: setIsLoggedIn,
                getApiService: getApiService,
                user: user,
                setUser: setUser
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
