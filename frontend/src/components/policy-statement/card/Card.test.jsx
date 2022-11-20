import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from './Card';

const dataTest = {
    id: 1,
    title: 'Card test',
    content: 'My Card Works'
};

afterEach(cleanup);
test('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Card data={dataTest} />, div);
});
