import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState({
        email: '',
        name: ''
    });
    const localToken = sessionStorage.getItem('accessToken');

    const logout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem('accessToken');
    };

    useEffect(() => {
        if (localToken) {
            axios
                .get('https://api.yieldvest.hng.tech/user/profile', {
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
                        setAccessToken(localToken);
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

        // axios.interceptors.response.use(
        //     (res) => {
        //         localStorage.setItem('hook', accessToken);
        //         if (res.status === 401) {
        //             setIsLoggedIn(false);
        //             window.location = '/login';
        //         }

        //         return res;
        //     },
        //     (error) => {
        //         localStorage.setItem('err', JSON.stringify(error));
        //         console.log(error);
        //         return Promise.reject(error);
        //     }
        // );
    }, [localToken]);

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
