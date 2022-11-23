import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Plugger from './Plugger';

it('renders plugger component succesfully', () => {
    render(
        <MemoryRouter>
            <Plugger />
        </MemoryRouter>
    );
    expect(screen.getByTestId('plugger')).toBeInTheDocument();
});
