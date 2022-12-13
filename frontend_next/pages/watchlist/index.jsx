import React from "react";
import WatchHead from "../../components/watchlist/WatchHead";
import WatchTable from "../../components/watchlist/WatchTable";
import Layout from "../../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";

const Watchlist = () => {
  const onSuccess = () => {
    toast.success("Item deleted from watchlist");
  };

  const onFailure = () => {
    toast.error();
  };

  return (
    <Layout isProtected>
      <Head>
        <title>Yieldvest - Watchlist</title>
      </Head>

      <ToastContainer />
      <div className="w-full flex justify-center items-center px-[16px] py-[56px] bg-[#F5F5F5]">
        <div className="max-w-[1240px] w-full">
          {/* Watch list */}
          <WatchHead />
          {/* Watchlist Body */}
          <WatchTable onSuccess={onSuccess} onFailure={onFailure} />
        </div>
      </div>
    </Layout>
  );
};

export default Watchlist;
