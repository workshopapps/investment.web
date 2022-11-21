import React from 'react';
import SideBar from '../../components/settings/SideBar';
import PasswordSettings from '../../components/settings/PasswordSettings';
import PageLayout from '../layout';

export default function index() {
    return (
        <PageLayout>
            <div className="flex sm:flex col lg:flex-row">
                <div className="w-1/5 border-r-black">
                    <SideBar />
                </div>
                <div className="w-4/5 mr-2">
                    <PasswordSettings />
                </div>
            </div>
        </PageLayout>
    );
}
