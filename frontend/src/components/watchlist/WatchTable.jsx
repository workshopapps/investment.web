import React, { useEffect, useState } from 'react';
import StockCard from './StockCard';
import authHooks from '../../auth/AuthHooks';

const WatchTable = () => {
    const [watchlist, setWatchlist] = useState([]);
    const apiService = authHooks.useApiService();

    useEffect(() => {
        apiService()
            .get('/user/watchlist')
            .then((res) => {
                if (res.status === 200) {
                    setWatchlist(res.data);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <div className="flex justify-around items-center gap-x-[8px] gap-y-[24px] flex-wrap">
                {watchlist.map((stock, index) => (
                    <StockCard stock={stock} key={index} />
                ))}
            </div>
        </div>
    );
};

export default WatchTable;
