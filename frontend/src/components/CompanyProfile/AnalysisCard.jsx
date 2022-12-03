import React from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, YAxis } from 'recharts';

import DownIcon from '../../assets/landingPage/icons/down.svg';
import UpIcon from '../../assets/landingPage/icons/up.svg';
import shareIcon from '../../assets/company-profile/share.svg';
import greenArrow from '../../assets/company-profile/green-arrow.svg';
import redArrow from '../../assets/company-profile/red-arrow.svg';
import { useParams } from 'react-router-dom';
// import DummyChart from '../../assets/company-profile/chart.svg';

const VisualDataCard = () => {
    const { companyId } = useParams();
    const [state, setState] = React.useState({
        show: false,
        value: '2022'
    });
    const [data, setData] = React.useState([]);

    const getStartDate = () => {
        const year = parseInt(state.value) - 5;
        console.log(year);
        return `${year}-12-31`;
    };

    const getEndDate = () => {
        return `${state.value}-12-31`;
    };

    React.useEffect(() => {
        axios
            .get(
                `https://api.yieldvest.hng.tech/company/${companyId}/interval?startDate=${getStartDate()}&endDate=${getEndDate()}`
            )
            .then((res) => {
                const raw = res.data['financials'];

                raw.forEach((each) => {
                    const newRevenue = each['total_revenue'] / 1e9;
                    const newDate = `${each['date']}`.substring(0, 4).trim();
                    const newIncome = each['net_income'] / 1e9;
                    console.log(newRevenue);
                    const pos = raw.indexOf(each);

                    raw[pos]['total_revenue'] = newRevenue;
                    raw[pos]['date'] = newDate;
                    raw[pos]['net_income'] = newIncome;
                    raw[pos]['price_index'] = [0, 0.5, 1, 1.5, 2, 2.5];
                });

                setData(raw);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }, [state.value]);

    return (
        <div className="h-auto flex flex-col text-[#5C5A5A] border rounded-lg px-6 py-4 font-HauoraLight">
            <div className="flex flex-row justify-between">
                <div className="relative inline-block">
                    <button className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl align-middle text-[#5C5A5A] px-4 py-3 border flex flex-row font-semibold justify-between gap-0 md:gap-10">
                        {state.value}{' '}
                        <img
                            className="p-2 ml-3 md:m-auto h-6 md:h-auto border bg-[#E8FBF2] rounded-full"
                            src={state.show ? UpIcon : DownIcon}
                            onClick={() => setState({ ...state, show: !state.show })}
                            alt="open"
                        />
                    </button>

                    {state.show && (
                        <div
                            className="absolute text-sm md:text-lg right-0 z-10 mt-2 w-full text-center origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1">
                            <div className="py-1" role="none">
                                {['2022', '2021', '2020', '2019', '2018'].map((each, key) => (
                                    <a
                                        href="#"
                                        key={key}
                                        className="text-gray-700 hover:bg-gray-700 hover:text-white block px-4 py-2"
                                        role="menuitem"
                                        onClick={() => setState({ show: false, value: each })}
                                        tabIndex="-1"
                                        id="menu-item-1">
                                        {each}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <button className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl align-middle text-[#5C5A5A] px-4 py-3 border flex flex-row font-semibold justify-between gap-0 md:gap-10 hover:shadow-md">
                    Share This Stock{' '}
                    <img
                        className="ml-3 md:m-auto h-4 md:h-auto bg-none"
                        src={shareIcon}
                        alt="open"
                    />
                </button>
            </div>

            <div className="h-100 my-10 w-full border border-1px bg-transparent">
                <LineChart width={900} height={500} data={data}>
                    <Line
                        type="monotone"
                        dataKey="total_revenue"
                        stroke="#333946"
                        strokeWidth={2}
                    />
                    <Line type="monotone" dataKey="net_income" stroke="#1BD47B" strokeWidth={2} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="total_revenue" />
                    <Tooltip />
                </LineChart>
            </div>

            <div className="mt-5 md:my-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                <h2 className="opacity-50 pl-4">Key Metric</h2>
                <h2 className="opacity-50 pl-0 md:pl-20">USD ({state.value})</h2>
                <h2 className="opacity-50 pl-4">% Change</h2>
            </div>

            {data.length > 0 ? (
                <>
                    <div className="mt-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                        <span className="flex flex-row md:w-1/4">
                            <input className="text-[#1BD47B]" type="checkbox" checked />
                            <p className="pl-5">Revenue</p>
                        </span>
                        <p className="text-left pr-10">{`${data[0]['total_revenue'].toFixed(
                            2
                        )}B`}</p>
                        <p className="flex flex-row gap-2">
                            <img src={greenArrow} alt="win" className="w-[20px] md:w-auto" />
                            {`${data[0]['revenue_growth'].toFixed(2)}%`}
                        </p>
                    </div>
                    <div className="mt-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                        <span className="flex flex-row md:w-1/4">
                            <input type="checkbox" />
                            <p className="pl-5">Operating expenses</p>
                        </span>
                        <p className="text-left pr-10">{`${(
                            data[0]['operating_expenses'] / 1e9
                        ).toFixed(2)}B`}</p>
                        <p className="flex flex-row gap-2">
                            <img src={greenArrow} alt="win" className="w-[20px] md:w-auto" />
                            {`${data[0]['operating_expenses_growth'].toFixed(2)}%`}
                        </p>
                    </div>
                    <div className="mt-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                        <span className="flex flex-row md:w-1/4">
                            <input type="checkbox" />
                            <p className="pl-5">Gross Profit</p>
                        </span>
                        <p className="text-left pr-10">{`${(data[0]['gross_profit'] / 1e9).toFixed(
                            2
                        )}B`}</p>
                        <p className="flex flex-row gap-2">
                            <img src={greenArrow} alt="loss" className="w-[20px] md:w-auto" />
                            {`${data[0]['gross_profit_growth'].toFixed(2)}%`}
                        </p>
                    </div>
                    <div className="my-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
                        <span className="flex flex-row md:w-1/4">
                            <input type="checkbox" />
                            <p className="pl-5">Net Income</p>
                        </span>
                        <p className="text-left pr-10">-3.49B</p>
                        <p className="flex flex-row gap-2">
                            <img src={redArrow} alt="loss" className="w-[20px] md:w-auto" />
                            9.99%
                        </p>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default VisualDataCard;
