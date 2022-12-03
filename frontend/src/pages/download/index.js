/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import lead from '../../assets/download/mac.svg';
import stock from '../../assets/download/comp.svg';
import chart from '../../assets/download/loosingChartImg.svg';
import download from '../../assets/download/download.svg';
import PageLayout from '../layout';

function DownloadPage() {
    return (
        <PageLayout>
            <div className="w-full md:flex justify-center items-center flex-col bg-[#F5F5F5]">
                <div className="md:flex px-[16px] w-full justify-center items-center bg-[#FFFFFF]">
                    <div className="max-w-[1243px] w-full">
                        <div className="md:flex items-center justify-between gap-[30px] py-[40px] md:py-[120px]">
                            <div className="text-center md:w-1/2 md:text-left">
                                <div className="flex justify-center gap-[5px] items-center text-[24px] mb-[16px] font-[600] md:block md:text-[57px]">
                                    <h1 className="text-[#1BD47B]">Yieldvest</h1>
                                    <h1 className="text-[#1F2226]">Desktop App</h1>
                                </div>

                                <p className="text-[16px] text-[#545964] font-[400] mb-[16px]">
                                    The fast, smart, and user-friendly Desktop Application with
                                    powerful new features and an intuitive design to get latest
                                    updates about stocks
                                </p>
                                <div className="hidden md:flex justify-start items-center gap-[8px]">
                                    <a
                                        href="#"
                                        className="p-[8px] gap-[10px] flex rounded bg-black text-white">
                                        <img src={download} /> Windows download
                                    </a>
                                    <a
                                        href="#"
                                        className="p-[8px] gap-[10px] flex rounded bg-black text-white">
                                        <img src={download} /> Mac Pc download
                                    </a>
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <div className="flex items-center justify-center md:justify-end">
                                    <img src={lead} className="mb-[16px] w-[334px] md:w-[604px]" />
                                </div>
                                <div className="flex text-[8px] md:hidden justify-center items-center gap-[8px]">
                                    <a
                                        href="#"
                                        className="gap-[10px] flex p-[8px] justify-center items-center rounded bg-black text-white">
                                        <img src={download} /> Windows download
                                    </a>
                                    <a
                                        href="#"
                                        className="gap-[10px] flex p-[8px] justify-center items-center rounded bg-black text-white">
                                        <img src={download} /> Mac Pc download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second section */}

                <div className="md:flex px-[16px] w-full justify-center my-[3rem] items-center bg-[#FFFFFF]">
                    <div className="max-w-[1243px] w-full">
                        <div className="md:flex items-center justify-between gap-[30px] md:py-[120px]">
                            <div className="md:w-1/2">
                                <div className="flex items-center mt-[40px] md:mt-[0px] justify-center md:justify-start">
                                    <img src={chart} className="mb-[16px] w-[334px] md:w-[604px]" />
                                </div>
                            </div>
                            <div className="text-center md:w-1/2 md:text-left">
                                <h3 className="text-[#1BD47B] mb-[16px] text-[20px] md:[32px]">
                                    Stop loosing charts
                                </h3>
                                <p className="text-[16px] text-[#545964] font-[400] mb-[16px]">
                                    Tired of always losing your charts, hidden away between all your
                                    open CNBC and YouTube tabs? Now keep all of findable from just
                                    one click on your desktop menu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* third section */}
                <div className="md:flex px-[16px] w-full justify-center items-center  bg-[#FFFFFF]">
                    <div className="max-w-[1243px] w-full">
                        <div className="md:flex items-center flex-col-reverse md:flex-row  justify-between gap-[30px] md:py-[120px]">
                            <div className="text-center md:w-1/2 md:text-left">
                                <h3 className="text-[#1BD47B] mb-[16px] text-[20px] md:[32px]">
                                    Enjoy Yieldfest without pop up ads
                                </h3>
                                <p className="text-[16px] text-[#545964] font-[400] mb-[16px]">
                                    No need to worry about Internet spams and pop ads. With
                                    Yieldvest you can monitor stocks seamlessly
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <div className="flex items-center mt-[40px] md:mt-[0px] justify-center md:justify-start">
                                    <img src={stock} className="mb-[16px] w-[334px] md:w-[604px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Third section */}
            </div>
        </PageLayout>
    );
}

export default DownloadPage;
