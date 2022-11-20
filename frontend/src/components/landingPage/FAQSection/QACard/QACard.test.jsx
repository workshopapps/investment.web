import React from 'react';
import { render, screen } from '@testing-library/react';
import QACard from './QACard';

test('render QA card', () => {
    render(<QACard question="Would you test me?" answer="Yes" />);
    expect(screen.getByRole('qa-card'));
});

test('render QA question', () => {
    render(<QACard question="Would you test me?" answer="Yes" />);
    expect(screen.getByRole('question'));
});
