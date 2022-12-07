import React, { useState, useContext, useEffect } from "react";
import Notificationsettings from "../../components/settings/Notificationsettings";
import Sidebar from "../../components/settings/SideBar";
import Layout from "../../components/Layout";
import AuthContext from "../../components/auth/AuthContext";
import authHooks from "../../components/auth/AuthHooks";
import Head from "next/head";

export default function Notifications() {
  const [notificationsSettings, setNotificationSettings] = useState(null);
  const { accessToken } = useContext(AuthContext);
  const apiService = authHooks.useApiService();

  const getSettingsNotifications = () => {
    if (!accessToken) return;
    apiService(accessToken)
      .get(`/user/notification_settings/`)
      .then((res) => {
        setNotificationSettings(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSettingsNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <Layout isProtected>
      <Head>
        <title>Yieldvest - Notification Settings</title>
      </Head>

      <div className="flex flex-col ">
        {/* <div className="border-r-black max-w[1028px] w-[100%]"> */}
        <div className="border-r-black w-full">
          <Sidebar />
        </div>
        {/* <div className="max-w[1028px] mx-auto w-full"> */}
        <div className="mr-2">
          <Notificationsettings notifications={notificationsSettings} />
        </div>
      </div>
    </Layout>
  );
}
