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
import CompanyProfilePage from './pages/companyProfile/index';

import HelpPage from './pages/help/';

// Define Page Routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'notification',
                element: <Notification />
            },
            {
                path: 'StockTips',
                element: <StockPage />,
                errorElement: <ErrorPage />
            },
            {
                path: 'about',
                element: <AboutPage />,
                errorElement: <ErrorPage />
            },
            {
                path: 'news',
                element: <NewsPage />,
                errorElement: <ErrorPage />
            },
            {
                path: 'topstories',
                element: <Topstories />,
                errorElement: <ErrorPage />
            },
            {
                path: 'company-profile',
                element: <CompanyProfilePage />,
                errorElement: <ErrorPage />
            }
        ]
    },
    {
        path: '/help',
        element: <HelpPage />,
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
