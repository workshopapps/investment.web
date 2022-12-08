import React from "react";
import SideBar from "../../components/settings/SideBar";
import ProfileSection from "../../components/settings/ProfileSection";
import Layout from "../../components/Layout";
import SubPlan from "../../components/settings/SubPlan";
import Head from "next/head";

export default function index() {
  return (
    <Layout isProtected>
      <Head>
        <title>Yieldvest - My Account</title>
      </Head>

      <div className="flex flex-col">
        <div className=" border-r-black">
          <SideBar />
        </div>
        <div className="px-[17px]">
          <ProfileSection />
          <SubPlan />
        </div>
      </div>
    </Layout>
  );
}
