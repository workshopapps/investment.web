import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import ProductDesigner from './ProductDesigner';

it('renders product designer component succesfully', () => {
    render(
        <MemoryRouter>
            <ProductDesigner />
        </MemoryRouter>
    );
    expect(screen.getByTestId('product-designer')).toBeInTheDocument();
});
