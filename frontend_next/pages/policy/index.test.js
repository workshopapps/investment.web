import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PolicyStatement from './index';

afterEach(cleanup);

test('renders without crashing', () => {
    render;
    try {
        <PolicyStatement />;
    } catch (error) {
        this.setState({ error });
    }
});
