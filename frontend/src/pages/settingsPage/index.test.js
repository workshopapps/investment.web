import React from 'react';
import { createRoot } from 'react-dom/client';
import Index from './index';

import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe('Settings Page', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        createRoot(div).render(<Index />);
    });
});
