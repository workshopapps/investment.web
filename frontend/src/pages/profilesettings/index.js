import React from 'react';
import SideBar from '../../components/settings/SideBar';
import ProfileSection from '../../components/settings/ProfileSection';
import PageLayout from '../layout';

export default function index() {
    return (
        <PageLayout>
            <div className="flex">
                <div className="w-1/5 border-r-black">
                    <SideBar />
                </div>
                <div className="w-4/5 mr-2">
                    <ProfileSection />
                </div>
            </div>
        </PageLayout>
    );
}
