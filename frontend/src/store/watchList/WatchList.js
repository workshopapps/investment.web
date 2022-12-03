import { createContext, useState } from 'react';

const WatchListContext = createContext();

// eslint-disable-next-line react/prop-types
export function WatchListProvider({ children }) {
    const [watchList, setWatchList] = useState([]);

    const addWatch = (id) => {
        setWatchList((prevState) => {
            return [...prevState, id];
        });
        console.log(watchList);
    };

    const deleteWatch = (id) => {
        setWatchList((prevState) => prevState.filter((watch) => watch !== id));
        console.log(watchList);
    };

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <WatchListContext.Provider value={{ watchList, addWatch, deleteWatch }}>
            {children}
        </WatchListContext.Provider>
    );
}

export default WatchListContext;
