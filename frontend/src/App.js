import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Only Page Components Rendered Here
import IndexPage from './pages/index/index'; // Landing Page Component
import ErrorPage from './pages/error';
import { StockPage } from './pages/stock';
import AboutPage from './pages/about';
import NewsPage from './pages/News/NewsPage';
import Topstories from './pages/News/Topstories';

import Contact from './pages/contact/Contact';
import Notification from './pages/notifications/Notification';
import CompanyProfilePage from './pages/companyProfile';
import SettingsPage from './pages/settingsPage';
import ProfileSettingsPage from './pages/profilesettings';
import PasswordSettingsPage from './pages/passwordsettingspage';

// Define Page Routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage />,
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
        path: '/company-profile',
        element: <CompanyProfilePage />,
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
