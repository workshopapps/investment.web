import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Section3 from './Section3';

it('renders section 3 component succesfully', () => {
    render(
        <MemoryRouter>
            <Section3 />
        </MemoryRouter>
    );
    expect(screen.getByTestId('section3')).toBeInTheDocument();
});
