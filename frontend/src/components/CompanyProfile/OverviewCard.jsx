import React from 'react';
import PropTypes from 'prop-types';

import USFlag from '../../assets/company-profile/US.png';

const OverviewCard = ({ companyId, name, price, industry }) => {
    return (
        <div className="hover:shadow-xl flex flex-col text-[#5C5A5A] bg-white rounded-xl border justify-center px-4 md:px-10 py-5 mb-6 font-Hauora">
            <div className="flex-row flex align-middle justify-between gap-1">
                <span className="text-lg md:text-xl font-sans font-bold pt-2">{name}</span>
                <button className="text-sm md:text-base p-3 bg-[#D9D9D9] rounded-xl h-fit">
                    {companyId}
                </button>
            </div>
            <div className="flex-row flex align-middle justify-start my-3">
                <span className="text-xl md:text-2xl font-semibold pt-3">${price}</span>
            </div>
            <div className="flex-row flex align-middle justify-between">
                <div className="text-base font-sans font-light pt-3">
                    <span className="text-[#1BD47B] font-medium">Industry:</span>
                    <br /> {industry}
                </div>
                <div className="flex flex-col justify-end text-right text-base pr-3 font-sans font-light pt-3 gap-2">
                    <div className="flex justify-end">
                        <img
                            src={USFlag}
                            alt="Flag"
                            width="40px"
                            height="5em"
                            className="flex justify-end"
                        />
                    </div>
                    <p>United States</p>
                </div>
            </div>
        </div>
    );
};

OverviewCard.propTypes = {
    companyId: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    industry: PropTypes.string
};

export default OverviewCard;
