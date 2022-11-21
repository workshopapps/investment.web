import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import StockTips from './StockTips';
// import Goals from './Goals';

it('renders Stock Tips component succesfully', () => {
    render(
        <MemoryRouter>
            <StockTips />
        </MemoryRouter>
    );
    expect(screen.getByTestId('stock')).toBeInTheDocument();
});
