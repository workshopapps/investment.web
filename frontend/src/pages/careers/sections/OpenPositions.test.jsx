import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import OpenPositions from './OpenPositions';

it('renders open positions component succesfully', () => {
    render(
        <MemoryRouter>
            <OpenPositions />
        </MemoryRouter>
    );
    expect(screen.getByTestId('open-positions')).toBeInTheDocument();
});
