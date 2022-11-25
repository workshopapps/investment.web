import { useState } from 'react';

const useLogin = () => {
    const [userLoggedIn, SetUserLoggedIn] = useState(false);
    const loginHandler = () => {
        SetUserLoggedIn(false);
    };
    const logoffHandler = () => {
        SetUserLoggedIn(true);
    };
    return {
        userLoggedIn,
        loginHandler,
        logoffHandler
    };
};

export default useLogin;
