import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewItem from './ReviewCard';

test('renders client name', () => {
    render(<ReviewItem name="Steven" description="Briefing.." />);
    expect(screen.getByRole('item-title'));
    expect(screen.getByText(/Steven/i));
});

test('renders comment', () => {
    render(<ReviewItem name="Steven" description="Briefing.." />);
    expect(screen.getByRole('item-desc'));
    expect(screen.getByText(/Briefing../i));
});
