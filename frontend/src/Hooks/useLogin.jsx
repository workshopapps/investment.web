import { useState } from 'react';

const useLogin = () => {
    const [userLoggedIn, SetUserLoggedIn] = useState(false);
    const loginHandler = () => {
        SetUserLoggedIn(true);
    };
    const logoffHandler = () => {
        SetUserLoggedIn(false);
    };
    return {
        userLoggedIn,
        loginHandler,
        logoffHandler
    };
};

export default useLogin;
