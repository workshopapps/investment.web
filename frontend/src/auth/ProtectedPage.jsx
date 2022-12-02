import React, { useEffect, useContext } from 'react';
import AuthContext from './AuthContext';

const ProtectedPage = ({ children }) => {
    const { setAccessToken, getApiService, setUser, setIsLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        const localToken = sessionStorage.getItem('accessToken');
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
    }, []);

    return <>{children}</>;
};

export default ProtectedPage;
