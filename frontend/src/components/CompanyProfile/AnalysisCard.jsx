import React from 'react';

const CompanyOverviewCard = () => {
    return (
        <div className="flex flex-col bg-white md:px-[100px] px-[2rem]">
            <div className="px-0 md:px-10">
                <h3 className="text-2xl text-[#000616] font-semibold pt-10 pb-6 ">
                    {' '}
                    Amazon.com, Inc
                    <span className="text-[#8A8D95] text-base font-normal"> AMZN </span>
                </h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between px-0 md:px-10">
                <div>
                    <h3 className="py-2 font-bold text-[#8A8D95] text-2xl">
                        $282.75{''}
                        <span className="text-[#0B5934] bg-[#DCF0E5] rounded-lg ml-6 p-2">
                            &uarr; 7.65%
                        </span>
                    </h3>
                    <p className="text-[#66717E] text-base font-semibold pt-2 md:pb-10 p-0">
                        Nov 11, 8:00:00 PM UTC-5 · USD · NASDAQ
                    </p>
                </div>
                <div className="flex md:my-0 my-10">
                    <div className="flex justify-between flex-col h-16 pr-6">
                        <h3 className="text-[#8A8D95] text-2xl font-semibold">HEALTH SCORE</h3>
                        <p className="text-[#8A8D95] text-base">
                            Our Verdict:{' '}
                            <span className="font-semibold text-base text-[#0B5934] pl-2">
                                Very Safe
                            </span>{' '}
                        </p>
                    </div>
                    <div className="bg-[#139757] text-white font-bold text-xl md:text-5xl flex items-center h-[30px] md:h-16 px-4">
                        89
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyOverviewCard;
