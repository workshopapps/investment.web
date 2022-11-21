import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewSection from './ReviewSection';

test('renders section title', () => {
    render(<ReviewSection />);
    expect(screen.getByText(/Our Reviews/i));
});

test('renders reviews card section', () => {
    render(<ReviewSection />);
    expect(screen.getByRole('section-items'));
});
