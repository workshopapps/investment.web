import axios from 'axios';
import { useContext } from 'react';
import AuthContext from './AuthContext';

const useApiService = () => {
    const { accessToken, setIsLoggedIn } = useContext(AuthContext);

    const baseUrl = 'https://api.yieldvest.hng.tech';

    return (requireAuthentication = true) => {
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
                    localStorage.setItem('message', JSON.stringify(res.data));
                    if (res.status === 401) {
                        setIsLoggedIn(false);
                        window.location = '/login';
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
};

export default {
    useApiService
};
