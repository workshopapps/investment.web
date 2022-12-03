import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import authHooks from './AuthHooks';

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState({
        email: '',
        name: ''
    });
    const apiService = authHooks.useApiService();

    const logout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem('accessToken');
    };

    useEffect(() => {
        const localToken = sessionStorage.getItem('accessToken');
        if (localToken && !accessToken) {
            apiService(false)
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
    }, []);

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
AuthProvider.propTypes = { children: PropTypes.element };
export default AuthProvider;
