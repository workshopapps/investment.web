import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import HeroSection from './HeroSection';

it('renders hero section succesfully', () => {
    render(
        <MemoryRouter>
            <HeroSection />
        </MemoryRouter>
    );
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
});

it('renders correct hero-section texts', () => {
    render(
        <MemoryRouter>
            <HeroSection />
        </MemoryRouter>
    );
    const h1 = screen.getByText('About Us');
    const p = screen.getByText('The Spark that ignites your dreams');
    expect(h1).toBeInTheDocument();
    expect(p).toBeInTheDocument();
});
