import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Section5 from './Section5';

it('renders section 5 component succesfully', () => {
    render(
        <MemoryRouter>
            <Section5 />
        </MemoryRouter>
    );
    expect(screen.getByTestId('section5')).toBeInTheDocument();
});
