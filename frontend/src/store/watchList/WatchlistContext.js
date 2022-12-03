import { createContext } from 'react';

const WatchListContext = createContext({
    addToWatchList: null,
    deleteFromWatchList: null
});

export default WatchListContext;
