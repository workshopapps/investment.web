import React, { useEffect, useState } from 'react';
import StockCard from './StockCard';
import AuthHooks from '../../auth/AuthHooks';

const WatchTable = () => {
    const [watchlist, setWatchlist] = useState([]);
    const apiService = AuthHooks.useApiService();

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
                {watchlist.map((id, index) => {
                    return <StockCard id={id} key={index} />;
                })}
            </div>
        </div>
    );
};

export default WatchTable;
