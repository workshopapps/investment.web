import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutNav from '../about/AboutNav';

test('renders component', () => {
    render(<AboutNav />);
    const aboutNav = screen.getByTestId('about-nav');
    expect(aboutNav).toBeInTheDocument();
});
