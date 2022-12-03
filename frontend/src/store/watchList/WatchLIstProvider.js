import { useContext } from 'react';
import AuthContext from '../../auth/AuthContext';
import WatchListContext from './WatchlistContext';

// eslint-disable-next-line react/prop-types
export function WatchListProvider({ children }) {
    const { getApiService } = useContext(AuthContext);
    const addToWatchList = (id) => {
        getApiService()
            .post(`/user/watchlist/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    // Notify user it has been added
                    console.log(id, ' Added to watchlist');
                } else {
                    // Notify the user
                    console.log(res);
                }
            })
            .catch((error) => {
                // Notify the user something failed
                console.log(error);
            });
    };

    const deleteFromWatchList = (id) => {
        getApiService()
            .delete(`/user/watchlist/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    // Notify user it has been deleted
                    console.log(id, ' Removed from watchlist');
                } else {
                    // Notify the user
                    console.log(res);
                }
            })
            .catch((error) => {
                // Notify the user something failed
                console.log(error);
            });
    };

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <WatchListContext.Provider value={{ addToWatchList, deleteFromWatchList }}>
            {children}
        </WatchListContext.Provider>
    );
}

export default WatchListContext;
