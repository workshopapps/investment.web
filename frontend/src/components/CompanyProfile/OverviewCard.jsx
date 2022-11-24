import React from 'react';
import PropTypes from 'prop-types';

import USFlag from '../../assets/company-profile/US.png';

const OverviewCard = ({ companyId, name, price, industry }) => {
    return (
        <div className="hover:shadow-xl flex flex-col text-[#5C5A5A] bg-white rounded-xl border justify-center px-4 md:px-10 py-5 mb-6 font-Hauora">
            <div className="flex-row flex align-middle justify-between gap-1">
                <span className="text-lg md:text-xl font-sans font-bold pt-2">{name}</span>
                <button className="text-sm md:text-base p-3 bg-[#D9D9D9] rounded-xl">
                    {companyId}
                </button>
            </div>
            <div className="flex-row flex align-middle justify-start my-3">
                <span className="text-xl md:text-2xl font-semibold pt-3">${price}</span>
            </div>
            <div className="flex-row flex align-middle justify-between">
                <span className="text-base font-sans font-light pt-3">Industry: {industry}</span>
                <span className="flex flex-col md:flex-row text-base pr-3 font-sans font-light pt-3 gap-2">
                    <img src={USFlag} alt="Flag" width="40px" height="5em" />
                    United States
                </span>
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
