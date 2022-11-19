import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Only Page Components Rendered Here
import IndexPage from './pages/index';
import ErrorPage from './pages/error';
import AboutPage from './pages/about';
import CompanyProfile from './pages/company-profile';

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
        element: <CompanyProfile />,
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
