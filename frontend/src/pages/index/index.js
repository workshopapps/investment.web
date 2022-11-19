import React from 'react';
import CapCard from './CapCard';
import PageLayout from '../layout';

import AccessImg from '../../assets/index/access.png';
import FirstBankImg from '../../assets/index/first_bank.png';
import GTImg from '../../assets/index/gtbank.png';
import MtnImg from '../../assets/index/mtn.png';
import NestleImg from '../../assets/index/nestle.png';
import TranscorpImg from '../../assets/index/transcorp.png';

const IndexPage = () => {
    return (
        <PageLayout>
            <section className="bg-black">
                <div className="max-w-[792px] h-[300px] lg:h-[516px] flex flex-col justify-center xl:ml-[107px] p-5 sm:px-10 xl:p-0">
                    <h1 className="text-xl sm:text-3xl xl:text-[50px] xl:leading-[50px] font-bold text-white mb-5 lg:mb-11">
                        We Track, Analyse & Recommend the best stocks for you.
                    </h1>
                    <p className="text-xs sm:text-base lg:text-xl text-white">
                        We provide well curated information to make smarted investment decisions
                        based on top companies metrics through simple and accessible expert
                        investment guidance.{' '}
                    </p>
                </div>
            </section>
            <section className="xl:py-14 sm:px-10  p-5 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#5c5a5a] text-base lg:text-2xl font-bold mb-14 space-y-[10px]">
                        Recommended Stocks to Invest in Today
                        <span className="text-base lg:ml-8 block lg:inline">
                            Updated on Nov 11th 2022 1:23 PM
                        </span>
                    </p>
                    <div className="space-y-6 ">
                        <h3 className="text-sm lg:text-2xl font-semibold text-[#66717e]">
                            Categories
                        </h3>
                        <div className="w-full rounded overflow-hidden mb-20">
                            <button className="px-2 py-3 lg:py-5 lg:px-6 bg-[#139757] border w-1/4 border-[#139757] text-white text-sm lg:text-base">
                                All cap
                            </button>
                            <button className="px-1 py-3 lg:py-5 lg:px-6 bg-white border w-1/4 border-[#139757] text-[#139757] text-sm lg:text-base">
                                Large cap
                            </button>
                            <button className="px-2 py-3 lg:py-5 lg:px-6 bg-white border w-1/4 border-[#139757] text-[#139757] text-sm lg:text-base">
                                Mid cap
                            </button>
                            <button className="px-2 py-3 lg:py-5 lg:px-6 bg-white border w-1/4 border-[#139757] text-[#139757] text-sm lg:text-base">
                                Small cap
                            </button>
                        </div>
                        <div className="lg:bg-white lg:border lg:border-[#49dd95] lg:rounded-[15px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:p-10">
                            <CapCard
                                logo={AccessImg}
                                abbr="ACCESS"
                                name="Access Holding PLC"
                                score={89}
                                verdict="Very Safe"
                            />
                            <CapCard
                                logo={MtnImg}
                                abbr="MTN"
                                name="MTN Nigeria PLC"
                                score={85}
                                verdict="Very Safe"
                            />
                            <CapCard
                                logo={NestleImg}
                                abbr="NESTLE"
                                name="NESTLE Nigeria PLC"
                                score={85}
                                verdict="Very Safe"
                            />
                            <CapCard
                                logo={FirstBankImg}
                                abbr="FBNH"
                                name="First Bank Nig. Holding PLC"
                                score={80}
                                verdict="Very Safe"
                            />
                            <CapCard
                                logo={GTImg}
                                abbr="GTCO"
                                name="Guaranty Trust Holdings"
                                score={81}
                                verdict="Very Safe"
                            />
                            <CapCard
                                logo={MtnImg}
                                abbr="MTN"
                                name="MTN Nigeria PLC"
                                score={85}
                                verdict="Very Safe"
                            />
                            <CapCard
                                logo={GTImg}
                                abbr="GTCO"
                                name="Guaranty Trust Holdings"
                                score={81}
                                verdict="Very Safe"
                            />
                            <CapCard
                                logo={TranscorpImg}
                                abbr="TRANSCORP"
                                name="Transnational Corperation"
                                score={75}
                                verdict="Safe"
                            />
                            <CapCard
                                logo={NestleImg}
                                abbr="NESTLE"
                                name="NESTLE Nigeria PLC"
                                score={75}
                                verdict="Safe"
                            />
                            <CapCard
                                logo={MtnImg}
                                abbr="MTN"
                                name="MTN Nigeria PLC"
                                score={69}
                                verdict="Very Safe"
                            />
                            <CapCard
                                logo={AccessImg}
                                abbr="ACCESS"
                                name="Access Holding PLC"
                                score={75}
                                verdict="Very Safe"
                            />
                            <CapCard
                                logo={TranscorpImg}
                                abbr="TRANSCORP"
                                name="Transnational Corperation"
                                score={75}
                                verdict="Safe"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default IndexPage;
