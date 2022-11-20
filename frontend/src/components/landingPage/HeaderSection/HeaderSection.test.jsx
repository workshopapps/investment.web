import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderSection from './HeaderSection';

test('renders section header', () => {
    render(<HeaderSection />);
    expect(screen.getByRole('test-section'));
});

test('renders header subtitle for partners', () => {
    render(<HeaderSection />);
    expect(screen.getByText(/Our Partners/i));
});

test('renders header image', () => {
    render(<HeaderSection />);
    expect(screen.getByRole('section-img').alt).toContain('frame1');
});
