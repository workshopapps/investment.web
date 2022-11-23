import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Careers from './Careers';

it('renders career component succesfully', () => {
    render(
        <MemoryRouter>
            <Careers />
        </MemoryRouter>
    );
    expect(screen.getByTestId('careers')).toBeInTheDocument();
});
