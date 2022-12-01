import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Eye from '../../assets/index/eye.svg';
import Modal from '../../components/Modal';

const CapCard = ({ logo, abbr, name, marketCap, stockPrice, rank, link, index, sector }) => {
    const [fundamentalModal, setFundamentalModal] = useState(false);
    const [priceModal, setPriceModal] = useState(false);
    const handlePriceModal = () => {
        setPriceModal(!priceModal);
    };
    const handleFundamentalModal = () => {
        setFundamentalModal(!fundamentalModal);
    };
    console.log(rank);
    return (
        <div className="border border-[#96ebc2] rounded-[10px] p-6 h-full font-Hauora">
            <div>
                <div className="-mt-4 -ml-3 text-[#525A65] text-2xl font-Hauora font-semibold">
                    {index + 1}
                </div>
                <div className="flex gap-5 mb-6 justify-between">
                    <div className="flex gap-5">
                        <div className="bg-[#E8FBF2] rounded-full h-6 lg:h-[50px] w-6 lg:w-[50px]">
                            <img src={logo} alt={abbr} />
                        </div>
                        <div className="">
                            <p className="text-[#333946] font-normal text-lg">{abbr}</p>
                            <p className="text-[#139757] font-normal text-sm">{name}</p>
                            <p className="text-[#545964] font-semibold text-sm">{sector}</p>
                        </div>
                    </div>
                    <div className="bg-[#96EBC2] text-[#292D32] font-normal text-2xl rounded-lg w-11 h-11 items-center flex justify-center">
                        +
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between font-semibold text-[#66717E] text-xs lg:text-base mb-6">
                        <p className="text-[#B0B2B7] font-normal pl-2">PRICE </p>
                        <p className="cursor-pointer" onClick={handlePriceModal}>
                            <img src={Eye} alt="eye" />
                        </p>
                    </div>
                    <div className="flex justify-between text-xs lg:text-base">
                        <p className="text-[#66717E] font-normal">Stock Price </p>
                        <p className="text-[#333946] text-semibold">${stockPrice}</p>
                    </div>
                    <hr className="text-[#B0B2B7] mx-1" />
                    <div className="flex justify-between font-semibold text-[#66717E] text-xs lg:text-base pb-[34px]">
                        <p className="text-[#B0B2B7] font-normal pl-2">FUNDAMENTALS </p>
                        <p className="cursor-pointer" onClick={handleFundamentalModal}>
                            <img src={Eye} alt="eye" />
                        </p>
                    </div>
                    <div className="flex justify-between text-xs lg:text-base">
                        <p className="text-[#66717E] font-normal">Market Cap </p>
                        <p className="text-[#333946] text-semibold">${marketCap / 1000000000}B</p>
                    </div>
                </div>
                <Link to={link}>
                    <div className="text-[#0F7544] mt-7 font-semibold cursor-pointer underline text-center">
                        See Company Profile
                    </div>
                </Link>
            </div>
            {priceModal && (
                <Modal passedFunc={priceModal} setPassedFunc={setPriceModal}>
                    <div>
                        <p className="text-[#B0B2B7] font-normal pl-2 pb-6 text-xs lg:text-base">
                            PRICE{' '}
                        </p>
                    </div>
                    <div className="flex justify-between text-xs lg:text-base">
                        <p className="text-[#66717E] font-normal">Stock Price </p>
                        <p className="text-[#333946] text-semibold">${stockPrice}</p>
                    </div>
                    <div className="flex justify-center text-center text-xs lg:text-base mt-10 opacity-50">
                        Sparkline Loading...
                    </div>
                </Modal>
            )}
            {fundamentalModal && (
                <Modal passedFunc={fundamentalModal} setPassedFunc={setFundamentalModal}>
                    <div>
                        <p className="text-[#B0B2B7] font-normal pl-2 pb-6 text-xs lg:text-base">
                            FUNDAMENTALS{' '}
                        </p>
                    </div>
                    <div className="flex justify-between text-xs lg:text-base">
                        <p className="text-[#66717E] font-normal">Market Cap </p>
                        <p className="text-[#333946] text-semibold">${marketCap / 1000000000}B</p>
                    </div>
                    <div className="flex justify-center text-center text-xs lg:text-base mt-10 opacity-50">
                        Chart Loading...
                    </div>
                </Modal>
            )}
        </div>
    );
};

CapCard.propTypes = {
    logo: PropTypes.string,
    abbr: PropTypes.string,
    name: PropTypes.string,
    marketCap: PropTypes.number,
    stockPrice: PropTypes.number,
    PERatio: PropTypes.number,
    rank: PropTypes.string,
    link: PropTypes.string,
    sector: PropTypes.string,
    index: PropTypes.number
};

export default CapCard;
