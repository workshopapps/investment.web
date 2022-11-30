import React from 'react';
import { BsTrash } from 'react-icons/bs';

const WatchTable = () => {
    const tableHead = ['Symbol', 'Last', 'Chg', '%Chg', 'Open', 'High', 'Low', 'Volume', 'Edit'];
    const stockWatchLists = [
        {
            symbol: 'TSLA',
            last: 151.84,
            chg: 8.34,
            perChg: 2.02,
            open: 216.85,
            high: 217.51,
            low: 211.53,
            volume: 7.86
        }
    ];
    return (
        <div className="bg-white border-[2px] rounded-[8px]">
            <div className="overflow-x-auto ">
                <table className="w-full divide-y border-spacing-[16px] md:border-spacing-[16px] border-separate">
                    <thead className="">
                        <tr>
                            {tableHead.map((item, index) => {
                                return (
                                    <th
                                        key={index}
                                        scope="col"
                                        className="py-3.5 text-left text-[20px] font-[700] text-[#1F2226]">
                                        {item}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {stockWatchLists.map((stock, index) => (
                            <tr key={index} className={index % 2 === 0 ? undefined : 'bg-gray-50'}>
                                <td className="whitespace-nowrap text-center  text-[20px] font-[400] text-white rounded-[8px] bg-red-500 mr-10px">
                                    {stock.symbol}
                                </td>
                                <td className="whitespace-nowrap py-4 text-[20px] font-[400] text-[#1F2226]">
                                    {stock.last}
                                </td>
                                <td className="whitespace-nowrap py-4 text-[20px] font-[400] text-[#19C170]">
                                    {stock.chg}
                                </td>
                                <td className="whitespace-nowrap py-4 text-[20px] font-[400] text-[#19C170]">
                                    {stock.perChg}
                                </td>
                                <td className="whitespace-nowrap py-4 text-[20px] font-[400] text-[#1F2226]">
                                    {stock.open}
                                </td>
                                <td className="whitespace-nowrap py-4 text-[20px] font-[400] text-[#1F2226]">
                                    {stock.high}
                                </td>
                                <td className="whitespace-nowrap py-4 text-[20px] font-[400] text-[#1F2226]">
                                    {stock.low}
                                </td>
                                <td className="whitespace-nowrap py-4 text-[20px] font-[400] text-[#1F2226]">
                                    {stock.volume}
                                </td>
                                <td className="relative whitespace-nowrap py-4 text-left text-sm font-medium">
                                    <a href="#" className="text-[#66717E] hover:text-indigo-900">
                                        <BsTrash className="text-[21px]" />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WatchTable;
