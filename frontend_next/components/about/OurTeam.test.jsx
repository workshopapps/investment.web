import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import OurTeam from './OurTeam';

it('renders Our team component succesfully', () => {
    render(
        <MemoryRouter>
            <OurTeam />
        </MemoryRouter>
    );
    expect(screen.getByTestId('the-team')).toBeInTheDocument();
});
