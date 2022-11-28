/* eslint-disable */
import React, { useCallback, useEffect } from 'react';
import { Link, UNSAFE_DataStaticRouterContext, useParams } from 'react-router-dom';
import { cardsData } from '../../store/cardsData/cardsData';
import DetailedCard from '../../components/CompanyProfile/DetailedCard';
import PropTypes from 'prop-types';
import PageLayout from '../layout';
import Back from '../../assets/company-profile/back-arrow.svg';
import AboutCompanyCard from '../../components/CompanyProfile/AboutCompany';
import CompanyOverviewCard from '../../components/CompanyProfile/AnalysisCard';

import UpIcon from '../../assets/landingPage/icons/up.svg';
import DownIcon from '../../assets/landingPage/icons/down.svg';
import OverviewCard from '../../components/CompanyProfile/OverviewCard';
import VisualDataCard from '../../components/CompanyProfile/AnalysisCard';
import { getCompanyData } from '../../server/companyProfile';
// import { companyData } from '../../store/companyData/profileBackend';

const CompanyProfilePage = () => {

    const [show, setShow] = React.useState(true);
    const { companyId } = useParams();
    const [data, setData] = React.useState({})

    const [loading, setLoading] = React.useState(true)

    // 
    // const rawData = companyData


    const fetchData = useCallback(async () => {
        if (companyId !== "") {
            await Promise.all([getCompanyData(companyId)])
                .then((res) => {
                    console.log(res[0])
                    setData(res[0])
                    setLoading(false)
                })
                .catch((err) => {
                    console.log(err[0].error_message);
                    return err;
                });
        }
    }, [companyId])

    useEffect(() => {
        // const resultData = rawData.find((item) => {
        //     return item.company_id == companyId
        // })
        // console.log(resultData)
        // setLoading(false)
        // setData(resultData)
        fetchData()
    }, [companyId]);

    switch (loading) {
        case true:
            return null
        default:
            return (
                <PageLayout>
                    <div className="bg-[#f5f5f5] font-Hauora">
                        <div>
                            <Link to="/">
                                <div className="flex mt-0 pt-5 text-[#5C5A5A] text-sm md:text-lg mx-[1em] md:mx-[100px] font-semibold">
                                    <img src={Back} alt="back" className="mr-4 md:mr-10" />{' '}
                                    Home &gt; &gt; Company Profile
                                </div>
                            </Link>
                            <div className="flex flex-col md:flex-row justify-between md:px-[100px] px-[1rem] gap-5">
                                <div className="md:w-1/3 w-full">
                                    <h3 className="text-2xl md:text-4xl text-[#5C5A5A] font-semibold py-10">
                                        Company Profile
                                    </h3>
                                    <OverviewCard
                                        companyId={companyId}
                                        name={data.name}
                                        price={`${data.stock_price.stock_price}`}
                                        industry={data.sector.industry}
                                    />
                                    <h5 className="text-sm md:text-md text-[#5C5A5A] px-4 md:px-10 pb-6 flex flex-row justify-between">
                                        MARKET CAP <span className="font-HauoraBold font-bold">{(data.market_cap / 1e9).toFixed(2)}B</span>
                                    </h5>

                                    <h5 className="text-sm md:text-md text-[#5C5A5A] px-4 md:px-10 pb-6 flex flex-row justify-between">
                                        DIVIDEND YIELD <span className="font-HauoraBold font-bold">{data.stock_price.dividend_yield ? data.stock_price.dividend_yield.toFixed(4) : `n/a`}</span>
                                    </h5>

                                    <h5 className="text-md md:text-xl bg-[#FFFFFF] rounded-xl align-middle text-[#5C5A5A] px-4 md:px-10 py-3 border flex flex-row font-semibold justify-between hover:shadow-xl">
                                        About <img className='p-2 cursor-pointer border bg-[#E8FBF2] rounded-full' src={show ? DownIcon : UpIcon} alt="open" onClick={() => setShow(!show)} />
                                    </h5>
                                    {show && <AboutCompanyCard description={data.description} />}

                                    <br />
                                </div>
                                <div className="md:w-2/3 w-full">
                                    <div className="flex flex-row text-xs md:text-lg text-[#5C5A5A] font-semibold py-4 md:py-10 gap-4">
                                        <button className="bg-[#B8F2D6] p-2 px-4 rounded-lg">Income Statement</button>
                                        <button className="hover:bg-[#B8F2D6] cursor-pointer rounded-lg opacity-50 p-2 px-4">Balance Statement</button>
                                        <button className="hover:bg-[#B8F2D6] cursor-pointer rounded-lg opacity-50 p-2 px-4">Cash Flow Statement</button>
                                    </div>
                                    <VisualDataCard />
                                    <br />
                                </div>

                            </div>
                        </div>
                    </div>
                </PageLayout>
            )
    }
};
export default CompanyProfilePage;
