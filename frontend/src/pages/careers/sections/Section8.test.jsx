import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Section8 from './Section8';

it('renders section 8 component succesfully', () => {
    render(
        <MemoryRouter>
            <Section8 />
        </MemoryRouter>
    );
    expect(screen.getByTestId('section8')).toBeInTheDocument();
});
