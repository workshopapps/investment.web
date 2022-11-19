import React from 'react';
import { Header, Footer } from '../../components';
import { cardsData } from '../../store/cardsData';
import PropTypes from 'prop-types';

// Company details card
const CompanyCard = ({ title, calculation, determinant, text, status }) => {
    return (
        <div className="mx-[100px] mt-6">
            <div className="flex justify-between pt-[17px] pb-[18px] px-[30px] bg-white">
                <h3 className="text-[#1F2226] text-2xl font-semibold">{title}</h3>
                <h4 className="bg-[#139757] rounded text-[#1F2226] text-base font-semibold px-[17px] py-[5px]">
                    {status}
                </h4>
            </div>
            <div className="bg-white/50 px-[30px]">
                <div className="opacity-[0.74] pt-[23px]">
                    Calculation:
                    <span className="font-semibold pl-1">{calculation}</span>
                </div>
                <div className="opacity-[0.8] pt-[11px]">
                    Determinant:
                    <span className="font-semibold pl-1">{determinant}</span>
                </div>
                <div className="text-justify text-xs opacity-50 pt-[33px] pb-[15px]">{text}</div>
            </div>
        </div>
    );
};

CompanyCard.propTypes = {
    title: PropTypes.string,
    calculation: PropTypes.string,
    determinant: PropTypes.string,
    text: PropTypes.string,
    status: PropTypes.string
};

const index = () => {
    return (
        <div className="bg-[#f5f5f5] font-Hauora">
            <Header />
            <div>
                <div className="flex bg-white mt-7 pt-5 pb-[30px] text-[32px] px-[98px]">
                    Company Profile / Summary of Analysis
                </div>
                <div className="px-[6.25rem]">
                    <h3 className="text-[40px] text-[#3D444C] font-semibold opacity-50 pt-10 pb-[34px]">
                        Fundamental Analysis
                    </h3>
                    <h5 className="text-xl text-[#525A65] pb-6 "> About the Company </h5>
                </div>
                <div className="bg-white">
                    <p className="text-base font-semibold opacity-50 pt-[39px] pb-4 px-[6.25rem]">
                        Amazon.com is an American tech multinational whose business interests
                        include e-commerce, cloud computing, digital streaming, and artificial
                        intelligence. A Fortune 100 mainstay, Amazon.com is also one of the Big
                        Five, or the five largest and most dominant technology companies in the U.S.
                        During the coronavirus pandemic, Amazon’s business soared, as millions of
                        Americans in lockdown became more reliant than ever on the company’s
                        delivery services. In early April 2021, then-CEO Jeff Bezos said the company
                        had amassed 200 million Prime subscribers, compared with 150 million at the
                        start of 2020. Over the years, Amazon has drawn stark criticism from those
                        who accuse the company of monopolistic and anticompetitive practices, as
                        well as from its fulfillment center employees who describe their poor
                        treatment and difficult working conditions.
                    </p>
                </div>
                <div className="text-xl text-[#525A65] pt-6 pb-4 px-[100px]">Our Analysis</div>
                <div className="flex flex-col bg-white px-[130px]">
                    <div>
                        <h3 className="text-2xl text-[#000616] font-semibold pt-[45px] pb-6 ">
                            {' '}
                            Amazon.com, Inc
                            <span className="text-[#66717E] text-base opacity-50 font-normal">
                                {' '}
                                AMZN{' '}
                            </span>
                        </h3>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h3 className="py-2 font-bold text-[#66717E] text-2xl">
                                $282.75{''}
                                <span className="text-[#0B5934] bg-[#DCF0E5] rounded-lg ml-6 p-2">
                                    &uarr; 7.65%
                                </span>
                            </h3>
                            <p className="text-[#66717E] text-base font-semibold pt-2 pb-[45px]">
                                Nov 11, 8:00:00 PM UTC-5 · USD · NASDAQ
                            </p>
                        </div>
                        <div className="flex pt-2">
                            <div className="flex justify-between flex-col h-16 pr-6">
                                <h3 className="text-[#525A65] text-2xl opacity-50 font-semibold">
                                    HEALTH SCORE
                                </h3>
                                <p className="text-[#000616] opacity-50 text-base">
                                    Our Verdict:{' '}
                                    <span className="font-semibold text-base text-[#0B5934] opacity-50 pl-2">
                                        Very Safe
                                    </span>{' '}
                                </p>
                            </div>
                            <div className="bg-[#139757] text-white font-bold text-[57px] flex items-center h-16 px-4">
                                89
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-[100px] mt-6">
                    <div>
                        {cardsData.map((item) => (
                            <CompanyCard
                                key={item.key}
                                title={item.title}
                                calculation={item.calculation}
                                determinant={item.determinant}
                                text={item.text}
                                status={item.remark}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default index;
