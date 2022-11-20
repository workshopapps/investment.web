import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutNav from './AboutNav';
import { MemoryRouter } from 'react-router-dom';

it('renders succesfully', () => {
    render(
        <MemoryRouter>
            <AboutNav />
        </MemoryRouter>
    );
    expect(screen.getByTestId('about-nav')).toBeInTheDocument();
});

it('renders correct nav texts', () => {
    render(
        <MemoryRouter>
            <AboutNav />
        </MemoryRouter>
    );
    const linkToHome = screen.getByText('Home').closest('a');
    const linkToServices = screen.getByText('Our Services').closest('a');
    const linkToTeam = screen.getByText('Our Team').closest('a');
    expect(linkToHome).toHaveAttribute('href', '/');
    expect(linkToServices).toHaveAttribute('href', '/#services');
    expect(linkToTeam).toHaveAttribute('href', '/#team');
});
