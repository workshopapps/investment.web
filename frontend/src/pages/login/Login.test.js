import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from './Login';
// import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';


it('renders without Crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<Login />);
});