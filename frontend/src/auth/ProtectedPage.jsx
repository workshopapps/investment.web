import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const ProtectedPage = ({ children, strict = true }) => {
    const localToken = sessionStorage.getItem('accessToken');
    const { logout, setIsLoggedIn, setAccessToken, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (localToken) {
            axios
                .get('https://api.yieldvest.hng.tech/user/profile', {
                    headers: {
                        Authorization: `Bearer ${localToken}`
                    },
                    validateStatus: (statusCode) => statusCode >= 200 && statusCode <= 500
                })
                .then((res) => {
                    if (res.status === 401) {
                        sessionStorage.removeItem('accessToken');
                        logout();
                        if (strict) {
                            navigate('/login');
                        }
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
        } else {
            if (strict) {
                if (strict) {
                    navigate('/login');
                }
            }
        }
    }, [localToken]);

    return <>{children}</>;
};
export default ProtectedPage;
