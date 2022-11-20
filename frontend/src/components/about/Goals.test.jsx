import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Goals from './Goals';

it('renders goal component succesfully', () => {
    render(
        <MemoryRouter>
            <Goals />
        </MemoryRouter>
    );
    expect(screen.getByTestId('goals')).toBeInTheDocument();
});
