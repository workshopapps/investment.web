import React from 'react';
import PropTypes from 'prop-types';

const ReviewItem = ({ name, description }) => {
    return (
        <div className="md:w-1/3 bg-[#E6E6E8] rounded-[10px] text-left flex flex-col p-10 justify-items-center font-HauoraLight">
            <div className="flex flex-row md:text-2xl font-light justify-between">
                <span>{name}</span>
                <span>*****</span>
            </div>

            <span className="text-[#545964] lg:text-md text-sm tracking-[0.25px] font-semibold my-4 font-Hauora">
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
