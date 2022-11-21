import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import MiddleSection from './MiddleSection';

it('renders middle section succesfully', () => {
    render(
        <MemoryRouter>
            <MiddleSection />
        </MemoryRouter>
    );
    expect(screen.getByTestId('middle-section')).toBeInTheDocument();
});
