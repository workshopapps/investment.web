import { useContext } from "react";
import AuthContext from "../../auth/AuthContext";
import WatchListContext from "./WatchlistContext";
import authHooks from "../../components/auth/AuthHooks";

export function WatchListProvider({ children }) {
  const { accessToken } = useContext(AuthContext);
  const apiService = authHooks.useApiService();

  const addToWatchList = (id, onSuccess, onFailure) => {
    apiService(accessToken)
      .post(`/user/watchlist/${id}`)
      .then((res) => {
        if (res.status === 200) {
          // Notify user it has been added
          onSuccess();
        } else {
          // Notify the user
          onFailure();
        }
      })
      .catch((error) => {
        // Notify the user something failed
        console.log(error);
        onFailure();
      });
  };

  const deleteFromWatchList = (id, onSuccess, onFailure) => {
    apiService(accessToken)
      .delete(`/user/watchlist/${id}`)
      .then((res) => {
        if (res.status === 200) {
          // Notify user it has been deleted
          onSuccess();
          console.log(id, " Removed from watchlist");
        } else {
          // Notify the user
          onFailure();
          console.log(res);
        }
      })
      .catch((error) => {
        // Notify the user something failed
        onFailure();
        console.log(error);
      });
  };

  return (
    <WatchListContext.Provider value={{ addToWatchList, deleteFromWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
}

export default WatchListContext;
