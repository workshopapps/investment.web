import React, { useEffect, useState, useContext } from "react";
import StockCard from "./StockCard";
import authHooks from "../auth/AuthHooks";
import AuthContext from "../auth/AuthContext";
import { ThreeDots } from "react-loader-spinner";

const WatchTable = ({ onSuccess, onFailure }) => {
  const [watchlist, setWatchlist] = useState([]);
  const { accessToken } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const apiService = authHooks.useApiService();

  const fetchWatchList = () => {
    setLoading(true);
    if (!accessToken) return;
    setWatchlist([]);
    apiService(accessToken)
      .get("/user/watchlist")
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          setWatchlist(res.data);
          console.log("Fetching data");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchWatchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  const watchlistItems = watchlist.map((stock, index) => {
    return (
      <StockCard
        stock={stock}
        key={index}
        reload={fetchWatchList}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    );
  });

  return (
    <div>
      <div className="flex justify-around items-center gap-x-[8px] gap-y-[24px] flex-wrap">
        {loading && (
          <div className="h-[50px] flex justify-center items-center w-full bg-white">
            <ThreeDots
              height="80"
              width="80"
              color="#49dd95"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
        {watchlist && watchlistItems}
      </div>
    </div>
  );
};

export default WatchTable;
