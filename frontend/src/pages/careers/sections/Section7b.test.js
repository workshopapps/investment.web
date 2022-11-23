import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Section7b from './Section7b';

it('renders section 7b component succesfully', () => {
    render(
        <MemoryRouter>
            <Section7b />
        </MemoryRouter>
    );
    expect(screen.getByTestId('section7b')).toBeInTheDocument();
});
