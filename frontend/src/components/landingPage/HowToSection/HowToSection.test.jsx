import React from 'react';
import { render, screen } from '@testing-library/react';
import HowToSection from './HowToSection';

test('renders section title', () => {
    render(<HowToSection />);
    expect(screen.getByText(/How It Works/i));
});

test('renders cards section', () => {
    render(<HowToSection />);
    expect(screen.getByRole('section-card'));
});
