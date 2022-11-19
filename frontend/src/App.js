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
import World from './pages/News/World';
import Small from './pages/News/Small';
import Long from './pages/News/Long';
import Industry from './pages/News/Industry';
import Local from './pages/News/Local';
import Bigcap from './pages/News/Bigcap';
// import CompanyProfilePage from './pages/companyprofile';

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
        path: 'World',
        element: <World />,
        errorElement: <ErrorPage />
    },
    {
        path: 'Small',
        element: <Small />,
        errorElement: <ErrorPage />
    },
    {
        path: 'long',
        element: <Long />,
        errorElement: <ErrorPage />
    },
    {
        path: 'industry',
        element: <Industry />,
        errorElement: <ErrorPage />
    },
    {
        path: 'mid',
        element: <Bigcap />,
        errorElement: <ErrorPage />
    },
    {
        path: 'Local',
        element: <Local />,
        errorElement: <ErrorPage />
    }
    // {
    //     path: 'company-profile',
    //     element: <CompanyProfilePage />,
    //     errorElement: <ErrorPage />
    // }
]);

function App() {
    return (
        <React.Fragment>
            <RouterProvider router={router} />
        </React.Fragment>
    );
}

export default App;
