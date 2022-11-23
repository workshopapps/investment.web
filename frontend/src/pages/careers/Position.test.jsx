import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Position from './Position';

it('renders position component succesfully', () => {
    render(
        <MemoryRouter>
            <Position />
        </MemoryRouter>
    );
    expect(screen.getByTestId('position')).toBeInTheDocument();
});
