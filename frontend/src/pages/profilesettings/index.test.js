import React from 'react';
import { createRoot } from 'react-dom/client';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Index from './index';

afterEach(cleanup);

describe('Profile Settings Page', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        createRoot(div).render(<Index />);
    });
});
