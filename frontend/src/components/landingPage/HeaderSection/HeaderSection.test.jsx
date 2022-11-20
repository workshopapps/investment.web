import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import HeaderSection from './HeaderSection';
import '@testing-library/jest-dom';

afterEach(cleanup);

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
