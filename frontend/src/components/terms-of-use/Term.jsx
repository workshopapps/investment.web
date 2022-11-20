/* eslint-disable prettier/prettier */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Term = ({ data }) => {
    const contentRef = useRef();

    useEffect(() => {
        contentRef.current.innerHTML = data.content;
    });

    return (
        <div>
            <h1 className="max-sm:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-bold py-6">
                {data.id}. {data.title}
            </h1>
            <div
                className="custom-content max-sm:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]"
                ref={contentRef}></div>
        </div>
    );
};
export default Term;

Term.propTypes = {
    data: PropTypes.object
};
