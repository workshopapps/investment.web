import React from 'react';
import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';
import Icon2 from '../../../../assets/landingPage/icons/icon2.svg';

test('renders card image', () => {
    render(<CardItem title="Test" subTitle="Subtitle to test" icon={Icon2} />);
    const img = screen.getByRole('card-img');
    expect(img);
});

test('renders card title', () => {
    render(<CardItem title="Test" subTitle="Subtitle to test" icon={Icon2} />);
    const element = screen.getByTestId('titleid');
    expect(element);
});

test('renders card sub title', () => {
    render(<CardItem title="Test" subTitle="Subtitle to test" icon={Icon2} />);
    const subTitle = screen.getByRole('card-subtitle');
    expect(subTitle);
});
