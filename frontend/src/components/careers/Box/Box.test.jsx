import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Box from './Box';

it('renders box component succesfully', () => {
    render(
        <MemoryRouter>
            <Box />
        </MemoryRouter>
    );
    expect(screen.getByTestId('box-component')).toBeInTheDocument();
});
