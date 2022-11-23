import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Form from './Form';

describe('Form Component', () => {
    it('renders form component succesfully', () => {
        render(
            <MemoryRouter>
                <Form />
            </MemoryRouter>
        );
        expect(screen.getByTestId('form-component')).toBeInTheDocument();
    });
});
