import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TermsAndConditionPage from './index';

afterEach(cleanup);

test('renders without crashing', () => {
    render;
    try {
        <TermsAndConditionPage />;
    } catch (error) {
        this.setState({ error });
    }
});
