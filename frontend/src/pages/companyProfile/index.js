/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { cardsData } from '../../store/cardsData/cardsData';
import DetailedCard from '../../components/CompanyProfile/DetailedCard';
import PropTypes from 'prop-types';
import PageLayout from '../layout';
import Back from '../../assets/company-profile/back-arrow-icon.svg';
import AboutCompanyCard from '../../components/CompanyProfile/AboutCompany';
import CompanyOverviewCard from '../../components/CompanyProfile/AnalysisCard';

import UpIcon from '../../assets/landingPage/icons/up.svg';
import DownIcon from '../../assets/landingPage/icons/down.svg';


const CompanyProfilePage = () => {
    const [show, setShow] = React.useState(false);

    return (
        <PageLayout>
            <div className="bg-[#f5f5f5] font-Hauora">
                <div>
                    <Link to="/">
                        <div className="flex bg-white mt-0 md:mt-7 pt-5 pb-[10px] md:pb-[30px] text-[1rem] md:text-[2rem] px-5 md:px-[98px]">
                            <img src={Back} alt="back" className="w-2 md:w-3 mr-2 md:mr-4" />{' '}
                            Company Profile / Summary of Analysis
                        </div>
                    </Link>
                    <div className="md:px-[6.25rem] px-[2rem]">
                        <h3 className="text-[40px] text-[#8A8D95] font-semibold pt-10 pb-[34px]">
                            Fundamental Analysis
                        </h3>
                        <h5 className="text-xl text-[#525A65] pb-6 flex flex-row justify-between">
                            About the Company {'  '}<img className='px-2 pt-1 border rounded-full' src={show ? DownIcon : UpIcon} alt="open" onClick={() => setShow(!show)} />
                        </h5>
                    </div>
                    {!show && <AboutCompanyCard />}


                    <div className="text-xl text-[#525A65] pt-6 pb-4 md:px-[100px] px-[2rem]">
                        Our Analysis
                    </div>
                    <CompanyOverviewCard />

                    <div className="mx-[0] md:px-0 px-[2rem] my-10">
                        <div>
                            {cardsData.map((item) => (
                                <DetailedCard
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
                    <br />
                </div>
            </div>
        </PageLayout>
    );
};
export default CompanyProfilePage;
