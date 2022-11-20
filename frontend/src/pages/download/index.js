import React from 'react';
import downloadImage from '../../assets/downloadImage/desktopImg.png';
import loosingChartImg from '../../assets/downloadImage/loosingChartImg.png';
import tabLinkingImg from '../../assets/downloadImage/tabLinkingImg.png';
import PageLayout from '../layout';

const DownloadPage = () => {
    return (
        <PageLayout>
            <div className="container flex flex-col md:flex-row items-center  mx-auto mt-10 space-y-0 md:space-y-0flex bg-[#F5F5F5] py-16 px-16">
                <div className="mx-auto w-34">
                    <h1 className="text-[#1BD47B] text-5xl my-15 md:text-left">MyStockPlug</h1>
                    <h1>Desktop App</h1>
                    <p className="w-96 md:w-1/2 text-[#545964]">
                        The fast, smart, and user-friendly Desktop Application with powerful new
                        features and an intuitive design to get latest updates about stocks
                    </p>
                    <div>
                        <button className="bg-[#000718] text-white rounded mr-3 mt-4 p-2">
                            Windows Download
                        </button>
                        <button className="bg-[#000718] text-white rounded mr-3 mt-4 p-2">
                            MAC PC Download
                        </button>
                    </div>
                </div>
                <div>
                    <img src={downloadImage} className="w-34" />
                </div>
            </div>
            <section>
                {/* Loosing charts section */}
                <div className="container flex flex-col items-center p-11 mx-auto md:flex-row">
                    <img src={loosingChartImg} className="w-30" />
                    <div>
                        <h1 className="text-[#1BD47B] text-5xl text-center">Stop losing Charts</h1>

                        <ul className="w-96 md:w-1/2 text-[#545964] ml-16">
                            <li>
                                Tired of always losing your charts, hidden away between all your
                                open CNBC and YouTube tabs? Now keep all of findable from just one
                                click on your desktop menu.TradingView Desktop is even faster than
                                your default browser. But you can still use both, and also our
                                mobile apps. It is all the same, with 100% synced layouts,
                                watchlists and settings.
                            </li>
                            <li>
                                Multiple monitors are important to traders. TradingView Desktop
                                allows you to set up and restore your multi-monitor workspace
                                without any of the limitations browsers traditionally face.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex flex-col md:flex-row bg-[#F5F5F5] p-11">
                    <div className="items-center px-6 mx-auto mt-10 space-y-0 mr-6 md:space-y-0flex bg-[#FFFFFF] p-16">
                        <h1 className="text-[#1BD47B] text-5xl text-center md:text-left">
                            Tab linking by symbol
                        </h1>
                        <p className="w-18 p-6">
                            Once you link a few tabs, they will all show up with the same symbol.
                            And if you change that symbol in any of them, it will change for all of
                            them. Handy for slicing your analysis multiple ways quickly.
                        </p>
                        <img src={tabLinkingImg} className="w-[404px] mx-auto height-auto" />
                    </div>
                    <div className="items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0flex bg-[#FFFFFF] p-16">
                        <h1 className="text-[#1BD47B] text-5xl text-center md:text-right">
                            Cross-hair sync on your workspace
                        </h1>
                        <p className="w-18 p-6">
                            Ideal for thorough market study, your crosshairs will move in sync
                            across all your displays. Plus, you can switch the ticker on every tab
                            with just a single click.
                        </p>
                        <img src={tabLinkingImg} className="w-[404px] mx-auto height-auto" />
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};
export default DownloadPage;
