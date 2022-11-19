import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Only Page Components Rendered Here
import IndexPage from './pages/index';
import ErrorPage from './pages/error';
import AboutPage from './pages/about';
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
        path: '/about',
        element: <AboutPage />,
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
