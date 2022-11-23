import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Table from './Table';

it('renders table component succesfully', () => {
    render(
        <MemoryRouter>
            <Table />
        </MemoryRouter>
    );
    expect(screen.getByTestId('table')).toBeInTheDocument();
});
