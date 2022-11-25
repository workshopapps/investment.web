import React from 'react';
import PropTypes from 'prop-types';

const CapCard = ({ logo, abbr, name, marketCap, stockPrice, PERatio }) => {
    return (
        <div className="border border-[#96ebc2] rounded-[10px] p-6 h-full">
            <div>
                <div className="flex gap-5 mb-6">
                    <div className="bg-[#E8FBF2] rounded-full h-6 lg:h-[50px] w-6 lg:w-[50px]">
                        <img src={logo} alt={abbr} />
                    </div>
                    <div className="text-[#545964] font-semibold text-xs lg:text-base">
                        <p>{abbr}</p>
                        <p className="text-[#139757] lg:text-[#545964]">{name}</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between font-semibold text-[#66717E] text-xs lg:text-base">
                        <p className="">Stock Price </p>
                        <p className="">${stockPrice}</p>
                    </div>
                    <div className="flex justify-between font-semibold text-[#66717E] text-xs lg:text-base">
                        <p className="">Market Cap </p>
                        <p className="">${marketCap}</p>
                    </div>
                    <div className="flex justify-between font-semibold text-[#66717E] text-xs lg:text-base">
                        <p className="">Dividend Yield </p>
                        <p className="text-[#139757]">{PERatio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

CapCard.propTypes = {
    logo: PropTypes.string,
    abbr: PropTypes.string,
    name: PropTypes.string,
    marketCap: PropTypes.number,
    stockPrice: PropTypes.number,
    PERatio: PropTypes.number
};

export default CapCard;
