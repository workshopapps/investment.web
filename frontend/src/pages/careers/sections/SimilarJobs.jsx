import React from 'react';
import Box from '../../../components/careers/Box/Box';

export default function SimilarJobs() {
    return (
        <div className="" data-testid="similar-job">
            <p className="text-primaryGray py-2 text-2xl ml-8 text-center md:text-justify">
                Similar Jobs
            </p>

            <div className="flex-col md:flex-row flex justify-evenly gap-4 content-center pb-5">
                <Box position="Growth Manager" employment="Full Time" commute="Remote" />
                <Box position="Customer Success Manager" employment="Full Time" commute="Remote" />
                <Box position="Copywriter" employment="Full Time" commute="Remote" />
                <Box position="Community Manager" employment="Full Time" commute="Remote" />
            </div>
        </div>
    );
}
