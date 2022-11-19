import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Only Page Components Rendered Here
import IndexPage from './pages/index/index'; // Landing Page Component
import ErrorPage from './pages/error';
import { StockPage } from './pages/stock';
import AboutPage from './pages/about';
import NewsPage from './pages/News/NewsPage';
import Topstories from './pages/News/Topstories';
import About from './pages/index/About';
import Stock from './pages/index/Stock';
import Help from './pages/index/Help';
import Contact from './pages/index/Contact';
import CompanyProfilePage from './pages/companyProfile';

// Define Page Routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage />,
        errorElement: <ErrorPage />
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
        path: '/news',
        element: <NewsPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/news',
        element: <NewsPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/news',
        element: <NewsPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/news',
        element: <NewsPage />,
        errorElement: <ErrorPage />,

        children: [
            {
                path: 'about',
                element: <About />
            },
            {
                element: <Stock />,
                index: true
            },
            {
                path: 'help',
                element: <Help />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'StockTips',
                element: <StockPage />
            }
        ]
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
