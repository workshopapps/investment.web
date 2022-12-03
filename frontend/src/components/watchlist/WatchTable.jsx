import React from 'react';
import StockCard from './StockCard';

const WatchTable = () => {
    return (
        <div>
            <div className="flex justify-around items-center gap-x-[8px] gap-y-[24px] flex-wrap">
                <StockCard />
                <StockCard />
                <StockCard />
                <StockCard />
                <StockCard />
                <StockCard />
                <StockCard />
                <StockCard />
            </div>
        </div>
    );
};

export default WatchTable;
