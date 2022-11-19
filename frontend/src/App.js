import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Only Page Components Rendered Here
import IndexPage from './pages/index';
import ErrorPage from './pages/error';
import About from './pages/index/About';
import Stock from './pages/index/Stock';
import Help from './pages/index/Help';
import Contact from './pages/contact/Contact';

// Define Page Routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexPage />,
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
            }
        ]
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
