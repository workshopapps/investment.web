import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../assets/company-profile/US.png';
import { FiTrash } from 'react-icons/fi';

// eslint-disable-next-line react/prop-types
const StockCard = ({ id }) => {
    // const [data, setData] = useState([]);
    console.log(id);
    return (
        <div className="max-w-[408px] w-full rounded-[8px] p-[28px] bg-white">
            <div>
                <div className="flex justify-between items-start mb-[24px]">
                    <div className="flex h-5 items-center">
                        <input
                            id="comments"
                            aria-describedby="comments-description"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                    </div>
                    <div className="max-w-[248px] w-full flex justify-between items-start uppercase gap-[10px]">
                        <div className="stock-logo h-[50px] w-[50px] rounded ">
                            <img src={Logo} alt="" />
                        </div>
                        <div>
                            <h2 className="font-[400] text-[18px] text-[#333946] ">Amazon(AMZN)</h2>
                            <p className="font-[400] text-[#139757] mb-[5x] capitalize">
                                Amazon.com inc
                            </p>
                            <p className="font-[600] text-[#545964] mb-[5x]">E-commerce</p>
                        </div>
                    </div>
                    <div>
                        <FiTrash className="text-[21px]" />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="mb-[28px] max-w-[242px] w-full">
                        <div className="mb-[24px] border-b-[2px]">
                            <h3 className="mb-[24px] text-[16px] font-[400] text-[#66717E]">
                                PRICE
                            </h3>
                            <div className="flex justify-between items-center mb-[24px] text-[16px] font-[400] text-[#545964]">
                                <p>Stock Price</p>
                                <p>$ 93.20</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-[24px] text-[16px] font-[400] text-[#66717E]">
                                FUNAMENTALS
                            </h3>
                            <div className="flex justify-between items-center text-[16px] font-[400] text-[#545964] ">
                                <p>Market Cap</p>
                                <p>$ 93.20B</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link to="#" className="text-[#0F7544] text-[16px] font-[600] underline">
                        See Company Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StockCard;