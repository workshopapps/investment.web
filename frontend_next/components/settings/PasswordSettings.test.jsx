import React from 'react';
import { createRoot } from 'react-dom/client';
import PasswordSettings from './PasswordSettings';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    createRoot(div).render(<PasswordSettings />);
});
