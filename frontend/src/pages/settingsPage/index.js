import React from 'react';
import Notificationsettings from '../../components/settings/Notificationsettings';

import Sidebar from '../../components/settings/SideBar';
import PageLayout from '../layout';

export default function index() {
    return (
        <PageLayout isProtected>
            <div className="flex ">
                <div className="w-1/6 border-r-black">
                    <Sidebar />
                </div>
                <div className="w-5/6 mr-2">
                    <Notificationsettings />
                </div>
            </div>
        </PageLayout>
    );
}
