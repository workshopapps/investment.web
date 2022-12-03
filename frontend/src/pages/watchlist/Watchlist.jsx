import React, { useContext } from 'react';
import WatchHead from '../../components/watchlist/WatchHead';
import WatchTable from '../../components/watchlist/WatchTable';
import PageLayout from '../layout';
import WatchListContext from '../../store/watchList/WatchLIstProvider';

const Watchlist = () => {
    const { Watchlist } = useContext(WatchListContext);
    console.log(Watchlist);
    // const [watchList, setWatchList] = useState([]);
    return (
        <PageLayout isProtected>
            <div className="w-full flex justify-center items-center px-[16px] py-[56px] bg-[#F5F5F5]">
                <div className="max-w-[1240px] w-full">
                    {/* Watch list */}
                    <WatchHead />
                    {/* Watchlist Body */}
                    <WatchTable />
                </div>
            </div>
        </PageLayout>
    );
};

export default Watchlist;
