import React from 'react';
import { render, screen } from '@testing-library/react';
import FAQSection from './FAQSection';

test('renders section title', () => {
    render(<FAQSection />);
    expect(screen.getByText(/Frequently Asked Question/i));
});
