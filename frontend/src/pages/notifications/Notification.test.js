import React from 'react';
import { render, screen } from '@testing-library/react';
import Notification from './Notification';

test('renders Notification without crashing', () => {
    render(<Notification />);
    const linkElement = screen.getByText(/Notification/i);
    expect(linkElement).toBeInTheDocument();
});
