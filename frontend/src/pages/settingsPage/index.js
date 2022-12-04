import React from 'react';
import Notificationsettings from '../../components/settings/Notificationsettings';

import Sidebar from '../../components/settings/SideBar';
import PageLayout from '../layout';

export default function index() {
    return (
        <PageLayout isProtected>
            {/* <div className="flex flex-col items-center "> */}
            <div className="flex flex-col max-w-[1028px] mx-auto w-full items-center ">
                {/* <div className="border-r-black max-w[1028px] w-[100%]"> */}
                <div className="border-r-black w-full">
                    <Sidebar />
                </div>
                {/* <div className="max-w[1028px] mx-auto w-full"> */}
                <div className="w-full">
                    <Notificationsettings />
                </div>
            </div>
        </PageLayout>
    );
}
