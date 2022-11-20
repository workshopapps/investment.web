import React from 'react';
import Box from '../../../components/careers/Box/Box';

export default function SimlarJobs() {
    return (
        <div className="sm:hidden block">
            <p className="text-primaryGray py-2 text-2xl ml-8">Similar Jobs</p>

            <div className="flex justify-evenly gap-4 content-center pb-5  sm:block">
                <Box position="Growth Manager" employment="Full Time" commute="Remote" />
                <Box position="Customer Success Manager" employment="Full Time" commute="Remote" />
                <Box position="Copywriter" employment="Full Time" commute="Remote" />
                <Box position="Community Manager" employment="Full Time" commute="Remote" />
            </div>
        </div>
    );
}
