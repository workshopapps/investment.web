import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Only Page Components Rendered Here
import IndexPage from './pages/index';
import LandingPage from './pages/landing'; // Landing Page Component
import ErrorPage from './pages/error';
import { StockPage } from './pages/stock';
import AboutPage from './pages/about';

import Contact from './pages/contact/Contact';
import Notification from './pages/notifications/Notification';
import CompanyProfilePage from './pages/companyProfile';
import DownloadPage from './pages/download';

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
        path: '/download',
        element: <DownloadPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/about',
        element: <AboutPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/company-profile',
        element: <CompanyProfilePage />,
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
