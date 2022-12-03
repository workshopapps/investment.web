import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import axios from 'axios';
import PropTypes from 'prop-types';

const AuthProvider = ({ children }) => {
    const baseUrl = 'https://api.yieldvest.hng.tech';

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState({
        email: '',
        name: ''
    });

    const localToken = sessionStorage.getItem('accessToken');

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
                        setIsLoggedIn(false);
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

    const logout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem('accessToken');
    };

    useEffect(() => {
        if (localToken) {
            setAccessToken(localToken);

            getApiService(false)
                .get('/user/profile', {
                    headers: {
                        Authorization: `Bearer ${localToken}`
                    }
                })
                .then((res) => {
                    if (res.status === 401) {
                        sessionStorage.removeItem('accessToken');
                        logout();
                        window.location = '/login';
                    }

                    if (res.status === 200) {
                        setIsLoggedIn(true);
                        setUser({
                            email: res.data.email,
                            name: res.data.name
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [localToken]);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                accessToken: accessToken,
                setAccessToken: setAccessToken,
                setIsLoggedIn: setIsLoggedIn,
                getApiService: getApiService,
                user: user,
                setUser: setUser,
                logout: logout
            }}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = { children: PropTypes.element };
export default AuthProvider;
