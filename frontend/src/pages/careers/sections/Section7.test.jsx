import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Section7 from './Section7';

it('renders section 7 component succesfully', () => {
    render(
        <MemoryRouter>
            <Section7 />
        </MemoryRouter>
    );
    expect(screen.getByTestId('section7')).toBeInTheDocument();
});
