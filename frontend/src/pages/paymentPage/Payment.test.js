import React from 'react';
import { render, screen } from '@testing-library/react';
import Payment from './Payment';

test('renders learn react link', () => {
    render(<Payment />);
    const linkElement = screen.getByText(/MyStockPlug/i);
    expect(linkElement).toBeInTheDocument();
});
