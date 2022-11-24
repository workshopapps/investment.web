import React from 'react';
import PropTypes from 'prop-types';

const DetailedCard = ({ title, calculation, determinant, text, status }) => {
    return (
        <div className="lg:mx-[100px] mx-0 mt-6">
            <div className="flex justify-between pt-[17px] pb-[18px] px-4 md:px-10 bg-white">
                <h3 className="text-[#1F2226] text-[1rem] md:text-2xl font-semibold">{title}</h3>
                <h4 className="bg-[#139757] rounded text-white text-base font-semibold px-[17px] py-[5px]">
                    {status}
                </h4>
            </div>
            <div className="bg-white/50 md:px-10 px-4">
                <div className="text-[#8A8D95] pt-4">
                    Calculation:
                    <span className="font-semibold md:text-base text-sm pl-1">{calculation}</span>
                </div>
                <div className="text-[#8A8D95] pt-4">
                    Determinant:
                    <span className="font-semibold md:text-base text-sm pl-1">{determinant}</span>
                </div>
                <div className="text-justify md:text-sm text-xs text-[#8A8D95] py-4">{text}</div>
            </div>
        </div>
    );
};

DetailedCard.propTypes = {
    title: PropTypes.string,
    calculation: PropTypes.string,
    determinant: PropTypes.string,
    text: PropTypes.string,
    status: PropTypes.string
};

export default DetailedCard;
