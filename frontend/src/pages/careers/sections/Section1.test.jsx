import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Section1 from './Section1';

it('renders section 1 component succesfully', () => {
    render(
        <MemoryRouter>
            <Section1 />
        </MemoryRouter>
    );
    expect(screen.getByTestId('section1')).toBeInTheDocument();
});
