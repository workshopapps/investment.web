import React from 'react';
import Notificationsettings from '../../components/settings/Notificationsettings';

import Sidebar from '../../components/settings/SideBar';
import PageLayout from '../layout';

export default function index() {
    return (
        <PageLayout isProtected>
            <div className="flex flex-col ">
                {/* <div className="border-r-black max-w[1028px] w-[100%]"> */}
                <div className="border-r-black w-full">
                    <Sidebar />
                </div>
                {/* <div className="max-w[1028px] mx-auto w-full"> */}
                <div className="mr-2">
                    <Notificationsettings />
                </div>
            </div>
        </PageLayout>
    );
}
