import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Only Page Components Rendered Here
import IndexPage from './pages/index';
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

import HelpPage from './pages/help';
import DownloadPage from './pages/download';
import PolicyPage from './pages/privacy-statement';
import TermsAndConditionPage from './pages/terms-of-use';
import Subscription from './pages/subscriptionPage/Subscription';

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
        path: '/company-profile',
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
        path: '/download',
        element: <DownloadPage />,
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
    }
]);

function App() {
    return (
        <React.Fragment>
            <RouterProvider router={router} />
        </React.Fragment>
    );
}

export default App;
