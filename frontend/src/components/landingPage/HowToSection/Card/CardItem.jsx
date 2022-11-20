import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ title, subTitle, icon }) => {
    return (
        <div className="md:w-1/3 flex flex-col py-10 justify-items-center hover:shadow-2xl shadow-md">
            <span className="mx-auto justify-center">
                <img role="card-img" src={icon} alt="icon"></img>
            </span>
            <span
                data-testid="titleid"
                className="text-[#000718] text-xl tracking-[0.25px] md:py-4 font-bold font-Hauora"
            >
                {title}
            </span>
            <span
                role="card-subtitle"
                className="text-[#8A8D95] md:mx-[25%] mx-[10%] tracking-[0.25px] md:mt-0 mb-10 font-semibold font-HauoraLight"
            >
                {subTitle}
            </span>
        </div>
    );
};

CardItem.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    icon: PropTypes.string
};

export default CardItem;
