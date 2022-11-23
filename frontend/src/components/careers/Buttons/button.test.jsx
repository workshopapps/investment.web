import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Button from './Button';

it('renders box component succesfully', () => {
    render(
        <MemoryRouter>
            <Button />
        </MemoryRouter>
    );
    expect(screen.getByTestId('button-component')).toBeInTheDocument();
});
