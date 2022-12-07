import React from "react";
import SideBar from "../../components/settings/SideBar";
import ProfileSection from "../../components/settings/ProfileSection";
import Layout from "../../components/Layout";
import SubPlan from "../../components/settings/SubPlan";

export default function index() {
  return (
    <Layout isProtected>
      <div className="flex flex-col">
        <div className=" border-r-black">
          <SideBar />
        </div>
        <div className="mr-2">
          <ProfileSection />
          <SubPlan />
        </div>
      </div>
    </Layout>
  );
}
