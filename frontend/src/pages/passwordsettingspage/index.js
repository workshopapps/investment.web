import React from 'react';
import SideBar from '../../components/settings/SideBar';
import PasswordSettings from '../../components/settings/PasswordSettings';
import PageLayout from '../layout';

export default function index() {
    return (
        <PageLayout isProtected>
            <div className="flex flex-col">
                <div className=" border-r-black">
                    <SideBar />
                </div>
                <div className=" mr-2">
                    <PasswordSettings />
                </div>
            </div>
        </PageLayout>
    );
}
