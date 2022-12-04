import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import CapCard from './CapCard';
import PageLayout from '../layout';
import dateFormat from 'dateformat';
import NotSubscribedModal from '../../components/subscription/NotSubscribedModal';
import { ToastContainer, toast } from 'react-toastify';
import { Select } from 'react-jsx-select';
import AuthContext from '../../auth/AuthContext';
import { ThreeDots } from 'react-loader-spinner';

import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';
import NotFoundImage from '../../assets/images/not_found.svg';

const IndexPage = () => {
    const baseUrl = 'https://api.yieldvest.hng.tech';
    const [stocks, setStocks] = useState(null);
    const [marketCap, setMarketCap] = useState('all');
    const [sector, setSector] = useState('all');
    const [industry, setIndustry] = useState('all');
    const [sectors, setSectors] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [lastUpdateDate, setLastUpdateDate] = useState(new Date().toLocaleDateString());
    const [showNotSubscribedModal, setShowNotSubscribedModal] = useState(false);

    const { isLoggedIn } = useContext(AuthContext);

    const handleMarketCap = (e) => {
        e.preventDefault();
        setMarketCap(e.target.value);
    };

    const handleSector = (e) => {
        e.preventDefault();
        setSector(e.target.value);
        setIndustry('all');
    };

    const handleIndustry = (e) => {
        e.preventDefault();
        setIndustry(e.target.value);
    };

    const formatLastUpdateDate = (date) => {
        return dateFormat(date, 'mmmm dS, yyyy, h:MM:ss TT');
    };

    useEffect(() => {
        axios
            .get(`${baseUrl}/company/sectors`)
            .then((res) => {
                setSectors(res.data);
                loadAllIndustries();
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        reloadIndustriesForSector(sector);
    }, [sectors]);

    useEffect(() => {
        reloadIndustriesForSector(sector);
    }, [sector]);

    useEffect(() => {
        if (marketCap === 'low_market_cap_category') {
            setShowNotSubscribedModal(true);
        }
    }, [marketCap]);

    useEffect(() => {
        reloadRankedCompanies();
    }, [marketCap, sector, industry]);

    const reloadRankedCompanies = () => {
        setStocks(null);
        const queries = [];

        if (marketCap !== 'all') queries.push({ key: 'category', value: marketCap });
        if (sector !== 'all') queries.push({ key: 'sector', value: sector });
        if (industry !== 'all') queries.push({ key: 'industry', value: industry });

        const params = {};
        queries.forEach((query) => {
            params[query['key']] = query['value'];
        });

        axios
            .get(`${baseUrl}/company/ranking`, {
                params: params
            })
            .then((res) => {
                setStocks(res.data);

                if (res.data) {
                    setLastUpdateDate(formatLastUpdateDate(res.data[0].current_ranking.updated_at));
                }
            })
            .catch((err) => console.log(err));
    };

    const loadAllIndustries = () => {
        const industryList = [];
        sectors.forEach((sector) => {
            sector.industries.forEach((industry) => {
                industryList.push(industry);
            });
        });

        setIndustries([...industryList]);
    };

    const reloadIndustriesForSector = (sectorId) => {
        if (sectorId === 'all') {
            loadAllIndustries();
        } else {
            for (let i = 0; i < sectors.length; i++) {
                if (sectors[i].sector_id === sectorId) {
                    const industryList = [];
                    sectors[i].industries.forEach((industry) => {
                        industryList.push(industry);
                    });

                    setIndustries([...industryList]);
                    break;
                }
            }
        }
    };

    const onSuccess = () => {
        toast.success('Added to watch list');
    };

    const onFailure = () => {
        toast.error('Failed to add to the list');
    };

    return (
        <PageLayout>
            {!isLoggedIn && (
                <NotSubscribedModal
                    isOpen={showNotSubscribedModal}
                    onClose={() => setShowNotSubscribedModal(false)}
                />
            )}
            <ToastContainer />
            <section className="bg-hero-mobile md:bg-hero-desktop bg-cover bg-center relative">
                <div className="w-fit h-[300px] lg:h-[516px] flex flex-col justify-center m-aut sm:px-10 xl:p-20">
                    <h1
                        className="max-w-[792px] text-left text-xl sm:text-3xl xl:text-[70px] xl:leading-[50px] font-bol text-white mb-5 lg:mb-11"
                        style={{
                            paddingRight: '50px',
                            lineHeight: '65px'
                        }}>
                        We Track, Analyse & Recommend the best stocks for you.
                    </h1>
                    <p className="max-w-[792px] text-xs sm:text-base lg:text-xl text-white">
                        We provide well curated information to make smarter investment
                        <br />
                        decisions based on Fundamental Analysis{' '}
                    </p>
                </div>
            </section>
            <section className="xl:py-14 sm:px-10  p-5 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#5c5a5a] text-base lg:text-2xl font-bold mb-4 md:mb-14 space-y-[10px]">
                        Recommended Stocks to Invest in Today
                        <span className="text-base lg:ml-8 block lg:inline">
                            Updated on {lastUpdateDate}
                        </span>
                    </p>
                    <div className="space-y-6 ">
                        <div className="flex flex-col md:flex-row items-left md:items-center">
                            <div className="flex mb-3 md:mb-0">
                                <h3 className="text-sm lg:text-2xl font-semibold text-[#66717e] pr-8">
                                    Filter by:
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 filter-category">
                                <select
                                    name="marketCap"
                                    onChange={handleMarketCap}
                                    className="py-2 px-2 md:py-3 md:px-4 border-[#00000020] border-2 w-full md:w-[236px] rounded">
                                    <option value="all">All Cap</option>
                                    <option value="high_market_cap_category">Large Cap </option>
                                    <option value="mid_market_cap_category">Mid Cap </option>
                                    <option value="low_market_cap_category">Small Cap </option>
                                </select>
                                <select
                                    name="sector"
                                    onChange={handleSector}
                                    className="py-2 px-2 md:py-3 md:px-4 border-[#00000020] border-2 w-full md:w-[236px] rounded">
                                    <option value="all">All Sectors</option>
                                    {sectors.map((sector, index) => (
                                        <option value={sector.sector_id} key={index}>
                                            {sector.sector}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    name="industry"
                                    onChange={handleIndustry}
                                    className="py-2 px-2 md:py-3 md:px-4 border-[#00000020] border-2 w-full md:w-[236px] rounded">
                                    <option value="all" selected={industry === 'all'}>
                                        All Industry
                                    </option>
                                    {industries.map((industry, index) => (
                                        <option value={industry.industry_id} key={index}>
                                            {industry.industry}
                                        </option>
                                    ))}
                                </select>
                                {/* <Select
                                    options={[
                                        {
                                            value: 'All Caps',
                                            label: 'All Caps',
                                            jsx: <span>All Caps</span>
                                        },
                                        {
                                            value: 'Large Cap',
                                            label: 'Large Cap',
                                            jsx: <span>Large Cap</span>
                                        },
                                        {
                                            value: 'Small Cap',
                                            label: 'Small Cap',
                                            jsx: <span>Mid Cap</span>
                                        },
                                        {
                                            value: 'Small Cap',
                                            label: 'Small Cap',
                                            jsx: <span>Small Cap</span>
                                        }
                                    ]}
                                    onChange={(e) => console.log(e)}
                                    name="Caps"
                                    defaultValue="All Caps"
                                    // disabled={false}
                                    // required={false}
                                    placeholder="Filter by Caps"
                                    className="form-control w-[236px] h-[48px] py-3 px-4 border-2 border-[#00000020] rounded"
                                    listStyle={{
                                        backgroundColor: 'white',
                                        border: '2px solid rgba(0, 0, 0, 0.2)'
                                    }}
                                    activeItemStyle={{ backgroundColor: '#49dd95' }}
                                    iconWidth="40"
                                    iconStyle={{
                                        fontSize: '26px',
                                        borderRadius: '0 5px 5px 0',
                                        color: '#49dd95'
                                    }}
                                /> */}
                            </div>
                        </div>

                        {!stocks && (
                            <div
                                className="lg:bg-white lg:border lg:border-[#49dd95] lg:rounded-[15px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:p-10"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '100%',
                                    marginTop: '30px'
                                }}>
                                <ThreeDots
                                    height="80"
                                    width="80"
                                    color="#49dd95"
                                    ariaLabel="bars-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                />
                            </div>
                        )}

                        {stocks && stocks.length === 0 && (
                            <div
                                //className="lg:bg-white lg:border lg:border-[#49dd95] lg:rounded-[15px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:p-10"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    width: '100%',
                                    marginTop: '30px'
                                }}>
                                <div>
                                    <img src={NotFoundImage} alt="Stocks not found" />
                                </div>
                            </div>
                        )}

                        {stocks && stocks.length !== 0 && (
                            <div className="lg:bg-white lg:border lg:border-[#49dd95] lg:rounded-[15px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:p-10">
                                {stocks.map((item, index) => (
                                    <CapCard
                                        key={index}
                                        logo={item.profile_image}
                                        abbr={item.company_id}
                                        name={item.name}
                                        PERatio={item.dividend_yield}
                                        marketCap={item.market_cap}
                                        stockPrice={item.stock_price}
                                        rank={item.category}
                                        index={index}
                                        sector={item.industry}
                                        link={`/company/${item.company_id}`}
                                        onSuccess={onSuccess}
                                        onFailure={onFailure}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <CookieConsent
                debug={true}
                location="bottom"
                buttonText="Accept All Cookies!!"
                cookieName="myAwesomeCookieName2"
                style={{ background: '#2B373B' }}
                buttonStyle={{
                    color: '#fff',
                    fontSize: '16px',
                    background: 'rgb(27, 212, 123)'
                }}
                expires={150}>
                This website uses cookies to enhance the user experience.{' '}
                <span style={{ fontSize: '15px', textDecoration: 'underline', color: 'blue' }}>
                    <Link to="/cookies">check cookies policy</Link>
                </span>
            </CookieConsent>
        </PageLayout>
    );
};

export default IndexPage;
