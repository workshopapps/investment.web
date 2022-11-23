import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Dropdown from './Dropdown';

it('renders dropdown component succesfully', () => {
    render(
        <MemoryRouter>
            <Dropdown />
        </MemoryRouter>
    );
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
});
