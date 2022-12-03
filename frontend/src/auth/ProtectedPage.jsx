import React, { useEffect, useContext } from 'react';
import AuthContext from './AuthContext';
import PropTypes from 'prop-types';
const ProtectedPage = ({ children }) => {
    const { getApiService, setUser, setIsLoggedIn, logout, accessToken } = useContext(AuthContext);

    useEffect(() => {
        if (accessToken) {
            getApiService(false)
                .get('/user/profile', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
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
    }, [accessToken]);

    return <>{children}</>;
};
ProtectedPage.propTypes = { children: PropTypes.element };
export default ProtectedPage;
