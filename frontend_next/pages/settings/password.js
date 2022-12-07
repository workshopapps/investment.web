import React from "react";
import SideBar from "../../components/settings/SideBar";
import PasswordSettings from "../../components/settings/PasswordSettings";
import Layout from "../../components/Layout";
import Head from "next/head";

export default function index() {
  return (
    <Layout isProtected>
      <Head>
        <title>Yieldvest - Password Settings</title>
      </Head>

      <div className="flex flex-col">
        <div className=" border-r-black">
          <SideBar />
        </div>
        <div className=" mr-2">
          <PasswordSettings />
        </div>
      </div>
    </Layout>
  );
}
