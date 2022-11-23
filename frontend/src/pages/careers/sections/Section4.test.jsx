import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Section4 from './Section4';

it('renders section 4 component succesfully', () => {
    render(
        <MemoryRouter>
            <Section4 />
        </MemoryRouter>
    );
    expect(screen.getByTestId('section4')).toBeInTheDocument();
});
