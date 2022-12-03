import React, { useState } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserStatusContext } from './store/UserStatusContext.jsx';

// Only Page Components Rendered Here
import IndexPage from './pages/index';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './pages/landing'; // Landing Page Component
import ErrorPage from './pages/error';
import { StockPage } from './pages/stock';

import AboutPage from './pages/about';
import NewsPage from './pages/News/NewsPage';
import Topstories from './pages/News/Topstories';
import Blog from './pages/Blog/Blog';
import Article from './pages/Blog/Article';
import Picked from './pages/News/Picked';
import Contact from './pages/contact/Contact';
import Notification from './pages/notifications/Notification';
import World from './pages/News/World';
import Small from './pages/News/Small';
import Long from './pages/News/Long';
import Industry from './pages/News/Industry';
import Local from './pages/News/Local';
import Bigcap from './pages/News/Bigcap';
import CompanyProfilePage from './pages/companyProfile';
import LargeCap from './pages/cap/LargeCap';
import SmallCap from './pages/cap/SmallCap';
import MidCap from './pages/cap/MidCap';
import CapIndustry from './pages/cap/Industry';

import Payment from './pages/paymentPage/Payment';

import SettingsPage from './pages/settingsPage';
import ProfileSettingsPage from './pages/profilesettings';
import PasswordSettingsPage from './pages/passwordsettingspage';
import Careers from './pages/careers/Careers';
import Plugger from './pages/careers/Plugger';
import Position from './pages/careers/Position';
import HowITWorks from './pages/HOWITWORKS/HowITWorks.jsx';
import HelpPage from './pages/help';
import PolicyPage from './pages/privacy-statement';
import TermsAndConditionPage from './pages/terms-of-use';
import Subscription from './pages/subscriptionPage/Subscription';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import ForgotPassword from './pages/Auth/ForgotPwd/ForgotPassword.jsx';
import Success from './pages/successPayment/Success';
import Cancel from './pages/cancelPayment/Cancel';
import HowItWorks from './pages/how-it-works/Index';
import DownloadPage from './pages/download/index.js';

// Define Page Routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/landing',
        element: <LandingPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/howto',
        element: <HowITWorks />,
        errorElement: <ErrorPage />
    },
    {
        path: '/contact',
        element: <Contact />,
        errorElement: <ErrorPage />
    },

    {
        path: '/notification',
        element: <Notification />
    },
    {
        path: '/StockTips',
        element: <StockPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/about',
        element: <AboutPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/news',
        element: <NewsPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/download',
        element: <DownloadPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/topstories',
        element: <Topstories />,
        errorElement: <ErrorPage />
    },
    {
        path: '/World',
        element: <World />,
        errorElement: <ErrorPage />
    },
    {
        path: '/Small',
        element: <Small />,
        errorElement: <ErrorPage />
    },
    {
        path: '/long',
        element: <Long />,
        errorElement: <ErrorPage />
    },
    {
        path: '/industry',
        element: <Industry />,
        errorElement: <ErrorPage />
    },
    {
        path: '/mid',
        element: <Bigcap />,
        errorElement: <ErrorPage />
    },
    {
        path: '/Local',
        element: <Local />
    },
    {
        path: '/picked',
        element: <Picked />
    },
    {
        path: '/company/:companyId',
        element: <CompanyProfilePage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/payment',
        element: <Payment />,
        errorElement: <ErrorPage />
    },
    {
        path: '/blog',
        element: <Blog />,
        errorElement: <ErrorPage />
    },
    {
        path: '/articles',
        element: <Article />,
        errorElement: <ErrorPage />
    },
    {
        path: '/help',
        element: <HelpPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/settings',
        element: <SettingsPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/profilesettings',
        element: <ProfileSettingsPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/passwordsettings',
        element: <PasswordSettingsPage />,

        errorElement: <ErrorPage />
    },
    {
        path: '/policy',
        element: <PolicyPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/terms',
        element: <TermsAndConditionPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/careers',
        element: <Careers />,
        errorElement: <ErrorPage />
    },
    {
        path: '/position',
        element: <Position />,
        errorElement: <ErrorPage />
    },
    {
        path: '/plugger',
        element: <Plugger />,
        errorElement: <ErrorPage />
    },
    {
        path: '/largecap',
        element: <LargeCap />,
        errorElement: <ErrorPage />
    },
    {
        path: '/smallcap',
        element: <SmallCap />,
        errorElement: <ErrorPage />
    },
    {
        path: '/industrycap',
        element: <CapIndustry />,
        errorElement: <ErrorPage />
    },
    {
        path: '/Midcap',
        element: <MidCap />,
        errorElement: <ErrorPage />
    },
    {
        path: '/subscription',
        element: <Subscription />,
        errorElement: <ErrorPage />
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: '/signup',
        element: <Signup />,
        errorElement: <ErrorPage />
    },
    {
        path: '/forgot',
        element: <ForgotPassword />,
        errorElement: <ErrorPage />
    },
    {
        path: '/reset',
        element: <ResetPassword />,
        errorElement: <ErrorPage />
    },
    {
        path: '/success',
        element: <Success />,
        errorElement: <ErrorPage />
    },
    {
        path: '/cancel',
        element: <Cancel />,
        errorElement: <ErrorPage />
    },
    {
        path: '/howitworks',
        element: <HowItWorks />,
        errorElement: <ErrorPage />
    }
]);

function App() {
    const [logged, setLogged] = useState(false);
    const loggedInHandler = () => {
        setLogged(true);
    };
    const loggedOffHandler = () => {
        setLogged(false);
    };
    return (
        <React.Fragment>
            <UserStatusContext.Provider value={{ logged, loggedInHandler, loggedOffHandler }}>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                    <RouterProvider router={router} />
                </GoogleOAuthProvider>
            </UserStatusContext.Provider>
        </React.Fragment>
    );
}

export default App;
