/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import { FiTrash, FiEye } from "react-icons/fi";
// import WatchListContext from "../../store/watchList/WatchlistContext";
import authHooks from "../auth/AuthHooks";
import AuthContext from "../auth/AuthContext";

const StockCard = ({ stock, reload, onSuccess, onFailure }) => {
  // const { deleteFromWatchList } = useContext(WatchListContext);
  const { accessToken, isLoggedIn } = useContext(AuthContext);
  const apiService = authHooks.useApiService();
  const { name, profile_image, sector, stock_price, market_cap, company_id } = stock;

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
    <div className="max-w-[408px] w-full rounded-[8px] p-[28px] bg-white">
      <div>
        <div className="flex justify-between items-start mb-[24px]">
          <div className="flex h-5 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <div className="max-w-[248px] w-full flex justify-between items-start uppercase gap-[10px]">
            <div className="stock-logo h-[50px] w-[50px] rounded ">
              <img src={profile_image} alt="" />
            </div>
            <div>
              <h2 className="font-[400] text-[18px] text-[#333946] ">
                {name.split(" ")[0]}
              </h2>
              <p className="font-[400] text-[#139757] mb-[5x] capitalize">
                {`${name.substring(0, 15)}`}
              </p>
              <p className="font-[600] text-[#545964] mb-[5x]">
                {sector ? `${sector.sector.substring(0, 10)}` : "sectors"}
              </p>
            </div>
          </div>
          <div
            onClick={async () => {
              deleteFromWatchList(company_id, onSuccess, onFailure);
              setTimeout(() => {
                reload();
              }, 1000);
            }}
          >
            <FiTrash className="text-[21px]" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="mb-[28px] max-w-[242px] w-full">
            <div className="mb-[24px] border-b-[2px]">
              <h3 className="mb-[24px] text-[16px] font-[400] text-[#66717E] flex justify-start items-center">
                PRICE
                <span className="ml-[10px]">
                  <FiEye className="text-[#8A8D95] " />
                </span>
              </h3>
              <div className="flex justify-between items-center mb-[24px] text-[16px] font-[400] text-[#545964] ">
                <p>Stock Price</p>
                <p>{`$${stock_price.stock_price.toFixed(2)}B`}</p>
              </div>
            </div>
            <div>
              <h3 className="mb-[24px] text-[16px] font-[400] text-[#66717E] flex justify-start items-center">
                FUNAMENTALS
                <span className="ml-[10px]">
                  <FiEye className="text-[#8A8D95] " />
                </span>
              </h3>
              <div className="flex justify-between items-center text-[16px] font-[400] text-[#545964] ">
                <p>Market Cap</p>
                <p>{`$${(market_cap / 1000000000).toFixed(2)}B`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            href={`/company/${company_id}`}
            className="text-[#0F7544] text-[16px] font-[600] underline"
          >
            See Company Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
