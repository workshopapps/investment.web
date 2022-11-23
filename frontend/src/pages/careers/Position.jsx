import React from 'react';
import OpenPositions from './sections/OpenPositions';
import Section8 from './sections/Section8';
import Table from './sections/Table';
import Dropdown from './sections/Dropdown';
import PageLayout from '../layout';

export default function Position() {
    return (
        <PageLayout>
            <div className="w-full font-Hauora" data-testid="position">
                <Section8 />
                <OpenPositions />
                <div className="relative rounded-xl bg-shade400 grid md:grid-cols-3 gap-2 m-8 shadow p-10">
                    <div>
                        <Dropdown />
                    </div>
                    <div className="md:col-span-2 hidden md:block">
                        <Table />
                    </div>
                </div>
                <div className="flex justify-end  mx-7 my-4 gap-4 content-center">
                    <span className="text-secondaryBlack text-sm mr-4 mt-2">1-16 of 26</span>
                    <button
                        className="border-2 border-primary102 rounded-md hover:bg-[#61eaa8] hover:text-white hover:border-0 bg-white opacity-25 text-primary102 p-2 text-xs"
                        disabled>
                        &lt; Previous
                    </button>
                    <button className="border-2 border-primary102 rounded-md bg-white text-primary102 p-2 text-xs hover:bg-[#34e58f] hover:text-white hover:border-0">
                        Next &gt;
                    </button>
                </div>
            </div>
        </PageLayout>
    );
}
