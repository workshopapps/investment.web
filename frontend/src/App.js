import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Only Page Components Rendered Here
import IndexPage from './pages/index/index'; // Landing Page Component
import ErrorPage from './pages/error';
import AboutPage from './pages/about';
import HelpPage from './pages/help';
import CompanyProfilePage from './pages/companyProfile';

// Define Page Routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage />,
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
