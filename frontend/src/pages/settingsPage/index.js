import React, { useState, useContext, useEffect } from 'react';
import Notificationsettings from '../../components/settings/Notificationsettings';

import Sidebar from '../../components/settings/SideBar';
import PageLayout from '../layout';
import AuthContext from '../../auth/AuthContext';
import authHooks from '../../auth/AuthHooks';

export default function index() {
    const [notificationsSettings, setNotificationSettings] = useState(null);
    const { accessToken } = useContext(AuthContext);
    const apiService = authHooks.useApiService();
    const getSettingsNotifications = () => {
        if (!accessToken) return;
        apiService(accessToken)
            .get(`/user/notification_settings/`)
            .then((res) => {
                setNotificationSettings(res?.data);
                console.log(res?.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getSettingsNotifications();
    }, [accessToken]);
    return (
        <PageLayout isProtected>
            <div className="flex flex-col ">
                {/* <div className="border-r-black max-w[1028px] w-[100%]"> */}
                <div className="border-r-black w-full">
                    <Sidebar />
                </div>
                {/* <div className="max-w[1028px] mx-auto w-full"> */}
                <div className="mr-2">
                    <Notificationsettings notifications={{ notificationsSettings }} />
                </div>
            </div>
        </PageLayout>
    );
}
