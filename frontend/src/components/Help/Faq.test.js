import React from 'react';
import { createRoot } from 'react-dom/client';
import Faq from './Faq';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders without Crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(<Faq />);
});

it('renders page correctly', () => {
    const { getByText } = render(<Faq question="a question" />);
    expect(getByText('a question')).toBeInTheDocument();
});

it('renders page correctly', () => {
    const { getByText } = render(<Faq answer="this is the answer" />);
    expect(getByText('this is the answer')).toBeInTheDocument();
});
