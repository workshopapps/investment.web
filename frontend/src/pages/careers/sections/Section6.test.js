import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Section6 from './Section6';

describe('Section 6 Component', () => {
    it('renders section 6 component succesfully', () => {
        render(
            <MemoryRouter>
                <Section6 />
            </MemoryRouter>
        );
        expect(screen.getByTestId('section6')).toBeInTheDocument();
    });
});
