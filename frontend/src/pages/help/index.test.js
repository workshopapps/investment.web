import React from 'react';
import { createRoot } from 'react-dom/client';
import HelpPage from './index';

import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders without Crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<HelpPage />);
});
