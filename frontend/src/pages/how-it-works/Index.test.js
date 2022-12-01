import React from 'react';
import { createRoot } from 'react-dom/client';
import '@testing-library/jest-dom';
import Index from './Index';


it('renders without Crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<Index />);
});