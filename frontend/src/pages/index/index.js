/* eslint-disable */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CapCard from './CapCard';
import PageLayout from '../layout';
import { companyData } from '../../store/companyData/backend';

const IndexPage = () => {
    const data = companyData;
    // const [data, setData] = useState([]);
    const [marketCap, setMarketCap] = useState('all');
    const [sector, setSector] = useState('all');
    let filteredCap = data.filter((item)=>{
        if (marketCap === 'large') {
            return item.category == `High Market Cap`;
        } else if (marketCap === 'mid') {
            return item.category == `Mid Market Cap`;
        } else if (marketCap === 'small') {
            return item.category == `Low Market Cap`;
        } else if (sector === 'industrials') {
            return item.sector == `Industrials`;
        } else if (sector === 'consumer') {
            return item.sector == `Consumer Cyclical`;
        } else if (sector === 'estate') {
            return item.sector == `Real Estate`;
        } else if (sector === 'communication') {
            return item.sector == `Communication Services`;
        } else if (sector === 'materials') {
            return item.sector == `Basic Materials`;
        } else if (sector === 'energy') {
            return item.sector == `Energy`;
        } else if (sector === 'utilities') {
            return item.sector == `Utilities`;
        } else if (sector === 'financial') {
            return item.sector == `Financial Services`;
        } else {
            return item;
        }
    }) 

    const handleMarketCap = (e) => {
        e.preventDefault();
        setSector(`all`)
        setMarketCap(e.target.value)
    }
    const handleSector = (e) => {
        e.preventDefault();
        setMarketCap(`all`)
        setSector(e.target.value)
    }
    useEffect(() => {
        const url = `https://api.aybims.tech/company/ranking`;
        axios
            .get(url, { headers: { 'Access-Control-Allow-Origin': '*' } })
            .then((res) => setData(res.data))
            .catch((err) => console.log(`Error: ${err}`));
    }, [data]);
    return (
        <PageLayout>
            <section className="bg-hero-mobile md:bg-hero-desktop bg-cover bg-center relative">
                <div className="w-fit h-[300px] lg:h-[516px] flex flex-col justify-center items-center text-center m-auto p-5 sm:px-10 xl:p-0">
                    <h1 className="max-w-[792px] text-center text-xl sm:text-3xl xl:text-[50px] xl:leading-[50px] font-bold text-white mb-5 lg:mb-11">
                        We Track, Analyse & Recommend the best stocks for you.
                    </h1>
                    <p className="max-w-[792px] text-xs sm:text-base lg:text-xl text-white">
                        We provide well curated information to make smarted investment decisions
                        based on Fundamental Analysis{' '}
                    </p>
                </div>
            </section>
            <section className="xl:py-14 sm:px-10  p-5 bg-[#F5F5F5]">
                <div className="max-w-7xl mx-auto">
                    <p className="text-[#5c5a5a] text-base lg:text-2xl font-bold mb-4 md:mb-14 space-y-[10px]">
                        Recommended Stocks to Invest in Today
                        <span className="text-base lg:ml-8 block lg:inline">
                            Updated on Nov 25th 2022 11:55 AM
                        </span>
                    </p>
                    <div className="space-y-6 ">
                        <div className="flex flex-col md:flex-row items-left md:items-center">
                            <div className="flex mb-3 md:mb-0">
                                <h3 className="text-sm lg:text-2xl font-semibold text-[#66717e] pr-8">
                                    Filter by:
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 filter-category">
                                <select name="marketCap" onChange={handleMarketCap} className="py-2 px-2 md:py-3 md:px-4 border-[#00000020] border-2 w-full md:w-[236px] rounded">
                                    <option value="all">All Cap</option>
                                    <option value="large">Large Cap </option>
                                    <option value="mid">Mid Cap </option>
                                    <option value="small">Small Cap </option>
                                </select>
                                <select name="sector" onChange={handleSector} className="py-2 px-2 md:py-3 md:px-4 border-[#00000020] border-2 w-full md:w-[236px] rounded">
                                    <option value="all">All Sectors</option>
                                    <option value="industrials">Industrials</option>
                                    <option value="consumer">Consumer Cyclical </option>
                                    <option value="estate">Real Estate</option>
                                    <option value="communication">Communication Services </option>
                                    <option value="materials">Basic Materials </option>
                                    <option value="energy">Energy </option>
                                    <option value="utilities">Utilities </option>
                                    <option value="financial">Financial Services </option>
                                </select>
                                <select className="py-2 px-2 md:py-3 md:px-4 border-[#00000020] border-2 w-full md:w-[236px] rounded">
                                    <option>US Stock</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="lg:bg-white lg:border lg:border-[#49dd95] lg:rounded-[15px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:p-10">
                            { filteredCap.map((item, index)=> (
                                    <CapCard
                                        logo={item.profile_image}
                                        abbr={item.company_id}
                                        name={item.name}
                                        PERatio={item.dividend_yield}
                                        marketCap={item.market_cap}
                                        stockPrice={item.stock_price}
                                        rank={item.category}
                                        index={index}
                                        sector={item.sector}
                                        link={`/company/${item.company_id}`}
                                        />
                            )) }

                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default IndexPage;
