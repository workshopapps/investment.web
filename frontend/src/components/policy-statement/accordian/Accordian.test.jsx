import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Accordian from './Accordian';

const dataTest = {
    id: 1,
    title: 'Accordian test',
    content: 'My Accordian Works'
};

afterEach(cleanup);
test('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Accordian data={dataTest} />, div);
});
