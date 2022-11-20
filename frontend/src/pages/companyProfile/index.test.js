import React from 'react';
import { createRoot } from 'react-dom/client';
import CompanyProfile from './index';

it('renders without crashing', () => {
    const element = document.createElement('div');
    const root = createRoot(element);
    root.render(<CompanyProfile />);
});
