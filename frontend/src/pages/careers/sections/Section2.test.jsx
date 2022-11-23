import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Section2 from './Section2';

it('renders section 2 component succesfully', () => {
    render(
        <MemoryRouter>
            <Section2 />
        </MemoryRouter>
    );
    expect(screen.getByTestId('section2')).toBeInTheDocument();
});
