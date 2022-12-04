import React, { useEffect, useState, useContext } from 'react';
import StockCard from './StockCard';
import authHooks from '../../auth/AuthHooks';
import AuthContext from '../../auth/AuthContext';

const WatchTable = ({ onSuccess, onFailure }) => {
    const [watchlist, setWatchlist] = useState([]);
    const { accessToken } = useContext(AuthContext);
    const apiService = authHooks.useApiService();

    const fetchWatchList = () => {
        if (!accessToken) return;
        apiService(accessToken)
            .get('/user/watchlist')
            .then((res) => {
                if (res.status === 200) {
                    setWatchlist(res.data);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchWatchList();
    }, [accessToken]);

    return (
        <div>
            <div className="flex justify-around items-center gap-x-[8px] gap-y-[24px] flex-wrap">
                {watchlist.map((stock, index) => {
                    return (
                        <StockCard
                            stock={stock}
                            key={index}
                            reload={fetchWatchList}
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default WatchTable;
