import React from 'react';
import Notificationsettings from '../../components/settings/Notificationsettings';

import Sidebar from '../../components/settings/SideBar';
import PageLayout from '../layout';

export default function index() {
    return (
        <PageLayout isProtected>
            <div className="flex ">
                <div className="w-1/5 border-r-black">
                    <Sidebar />
                </div>
                <div className="w-4/5 mr-2">
                    <Notificationsettings />
                </div>
            </div>
        </PageLayout>
    );
}
