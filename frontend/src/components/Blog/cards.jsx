import React from 'react';
import Card from './Card';
import img1 from '../../assets/blog/img1.png';
import img2 from '../../assets/blog/Rectangle 8.png';
import img3 from '../../assets/blog/Rectangle 8 (1).png';
import img4 from '../../assets/blog/Rectangle 8 (2).png';
import img5 from '../../assets/blog/Rectangle 8 (3).png';
import img6 from '../../assets/blog/Rectangle 8 (4).png';
import img7 from '../../assets/blog/Rectangle 8 (5).png';
import img8 from '../../assets/blog/Rectangle 8 (6).png';
import img9 from '../../assets/blog/Rectangle 8 (7).png';
import img10 from '../../assets/blog/Rectangle 8 (8).png';
import img11 from '../../assets/blog/Rectangle 8 (9).png';
import img12 from '../../assets/blog/Rectangle 8 (10).png';
const CardData = [
    {
        img: img1,
        name: 'Jean McDonald',
        date: '11 November 2022',
        title: '10 Things to Know Before You Start Investing',
        description:
            'Investing can be a scary proposition, but it can also be rewarding. Long-term investment can help round out your wealth portfolio, hasten'
    },
    {
        img: img2,
        name: 'Wade Warren',
        date: '11 November 2022',
        title: 'Faster setup of visibility on intervals',
        description:
            'Adjusting the visibility of drawings and indicators on intervals just got a lot easier. Now you can make changes with just a few clicks.'
    },
    {
        img: img3,
        name: 'Ken Leoni',
        date: '10 November 2022',
        title: 'Quick and Dirty Way to Test if a Stock is Undervalued',
        description:
            'Investing can be a scary proposition, but it can also be rewarding. Long-term investment can help round out your wealth portfolio, hasten'
    },
    {
        img: img4,
        name: 'Howard Reisman',
        date: '10 November 2022',
        title: 'How to Research a Stock in Stock Rover Part II – vs Peers',
        description:
            'This is the second of a three part series designed to show you how to effectively use Stock Rover to research a stock.'
    },
    {
        img: img5,
        name: 'Tom Bowley',
        date: '10 November 2022',
        title: 'Walmart (WMT) and Target (TGT) Earnings',
        description:
            "Earnings season is quickly coming to a close, but it's just starting among the big retailers. On Tuesday, we'll get the latest earnings."
    },
    {
        img: img6,
        name: 'Barry D. Moore',
        date: '10 November 2022',
        title: 'The Liberated Stock Trader Beat the Market Screener 2021',
        description:
            'Dear fellow Stock Rover subscribers, it’s Barry here again to share the 2021 results of the Liberated Stock Trader Beat the Market System'
    },
    {
        img: img7,
        name: 'Ken Leoni',
        date: '09 November 2022',
        title: 'New Features Added to Stock Rover V8',
        description:
            'In this post we will cover some recent changes and additions to Stock Rover V8. Included are refinements for easier and more efficient'
    },
    {
        img: img8,
        name: 'Arthur Hill',
        date: '08 November 2022',
        title: 'How to Find the True Market Leaders',
        description:
            'Stocks surged this week with the SPDR S&P 500 ETF (SPY) advancing over 5% and nearing its falling 200-day simple moving average'
    },
    {
        img: img9,
        name: 'Jenny Wilson',
        date: '08 November 2022',
        title: 'OTC symbols are now available for live trading',
        description:
            'TradingView’s team is always hard at work to offer you the best trading prospects, and we’ve now made OTC trading available through our'
    },
    {
        img: img10,
        name: 'Guy Hawkins',
        date: '07 November 2022',
        title: 'Moving multiple drawing objects quickly and accurately',
        description:
            'Sometimes you’ll need to move multiple drawing objects at the same time, for example after a stock split.'
    },
    {
        img: img11,
        name: 'Howard Reisman',
        date: '06 November 2022',
        title: 'How to Research a Stock in Stock Rover Part I – Deep Dive',
        description:
            'This is the first of a three part series designed to show you how to effectively use Stock Rover to research a stock. We will be using Microsoft'
    },
    {
        img: img12,
        name: 'Jayanthi Gopalakrishnan',
        date: '05 November 2022',
        title: 'Shopify Stock Is Getting Some Love',
        description:
            'TradingView’s team is always hard at work to offer you the best trading prospects, and we’ve now made OTC trading available '
    }
];
const cards = () => {
    return (
        <div className="flex flex-wrap justify-between mb-8 lg:mb-12 gap-10 ">
            {CardData.map((items, index) => {
                return <Card item={items} key={index} />;
            })}
        </div>
    );
};

export default cards;
