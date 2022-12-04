import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import AuthContext from './AuthContext';

const ProtectedPage = ({ children }) => {
    const localToken = sessionStorage.getItem('accessToken');
    const { logout, setIsLoggedIn, setAccessToken, setUser } = useContext(AuthContext);

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
    }, [localToken]);

    return <>{children}</>;
};
export default ProtectedPage;
