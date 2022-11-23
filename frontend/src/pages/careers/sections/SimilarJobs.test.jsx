import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import SimilarJobs from './SimilarJobs';

it('renders similar jobs component succesfully', () => {
    render(
        <MemoryRouter>
            <SimilarJobs />
        </MemoryRouter>
    );
    expect(screen.getByTestId('similar-job')).toBeInTheDocument();
});
