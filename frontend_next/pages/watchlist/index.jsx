import React, { useContext, useEffect, useState } from "react";
import WatchHead from "../../components/watchlist/WatchHead";
import WatchTable from "../../components/watchlist/WatchTable";
import Layout from "../../components/Layout";
import { toast } from "react-toastify";
import Head from "next/head";
import AuthContext from "../../components/auth/AuthContext";
import authHooks from "../../components/auth/AuthHooks";

const Watchlist = () => {
  const [ deletedWatchItems, setDeleteWatchItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const { accessToken } = useContext(AuthContext);
  const apiService = authHooks.useApiService();
  const onSuccess = () => {
    toast.success("Item deleted from watchlist");
  };

  const onFailure = () => {
    toast.error();
  };

  const addToDeleteItems = (id) => {
    if (!deletedWatchItems.includes(id)) {
      setDeleteWatchItems(prev => [...prev, id]);
    }
  };

  const removeFromDeleteItems = (id) => {
    if (deletedWatchItems.includes(id)) {
      setDeleteWatchItems(prev => prev.filter(item => item !== id))
    }
  }

  const deleteFromWatchList = (data) => {
    apiService(accessToken)
      .delete(`/user/watchlist/`, data)
      .then((res) => {
        if (res.status === 200) {
          // Notify user it has been deleted
          // onSuccess();
          console.log(res, " Removed from watchlist");
        } else {
          // Notify the user
          // onFailure();
          console.log(res);
        }
      })
      .catch((error) => {
        // Notify the user something failed
        // onFailure();
        console.log(error);
      });
  };

  return (
    <Layout isProtected>
      <Head>
        <title>Yieldvest - Watchlist</title>
      </Head>

      <div className="w-full flex justify-center items-center px-[16px] py-[56px] bg-[#F5F5F5]">
        <div className="max-w-[1240px] w-full">
          {/* Watch list */}
          <WatchHead deleteWatchItems={deleteFromWatchList} deleteItems={deletedWatchItems} setSelectAll={setSelectAll} selectAll={selectAll} />
          {/* Watchlist Body */}
          <WatchTable onSuccess={onSuccess} add={addToDeleteItems} remove={removeFromDeleteItems} onFailure={onFailure} selectAll={selectAll} />
        </div>
      </div>
    </Layout>
  );
};

export default Watchlist;
