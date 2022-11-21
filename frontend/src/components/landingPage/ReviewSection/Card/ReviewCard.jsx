/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';

import Star from '../../../../assets/landingPage/icons/star.svg';
import HalfStar from '../../../../assets/landingPage/icons/half-star.svg';

const ReviewItem = ({ name, description }) => {
    return (
        <div className="md:w-1/3 bg-[#E6E6E8] rounded-[10px] text-left flex flex-col p-4 md:p-10 justify-items-center font-HauoraLight">
            <div className="flex flex-row md:text-2xl font-light justify-between">
                <span role="item-title">{name}</span>
                <span className="flex flex-row">
                    <img className="w-1/5" src={Star} alt="Star" />
                    <img className="w-1/5" src={Star} alt="Star" />
                    <img className="w-1/5" src={Star} alt="Star" />
                    <img className="w-1/5" src={Star} alt="Star" />
                    <img className="w-1/5" src={HalfStar} alt="Star" />
                </span>
            </div>

            <span
                role="item-desc"
                className="text-[#545964] lg:text-md text-sm tracking-[0.25px] font-semibold my-4 font-Hauora">
                {description}
            </span>
        </div>
    );
};

ReviewItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
};

export default ReviewItem;
