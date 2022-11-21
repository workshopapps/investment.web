import React from 'react';
import { render, screen } from '@testing-library/react';
import CompanyProfile from './index';

test('renders without crashing', () => {
    render(<CompanyProfile />);
    const linkElement = screen.getByText(/MyStockPlug/i);
    expect(linkElement).toBeInTheDocument();
});
