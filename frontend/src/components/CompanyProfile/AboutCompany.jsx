import React from 'react';
import PropTypes from 'prop-types';

const AboutCompanyCard = ({ description }) => {
    return (
        <div className="bg-white border rounded-xl my-2 hover:shadow-xl">
            <p className="md:text-base text-justify text-xs font-semibold text-[#8A8D95] px-4 md:px-10 py-6">
                {description}
            </p>
        </div>
    );
};

AboutCompanyCard.propTypes = {
    description: PropTypes.string
};

export default AboutCompanyCard;
