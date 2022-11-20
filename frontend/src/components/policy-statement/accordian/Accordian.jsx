import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

//styles
import './Accordian.css';

const Accordian = ({ data }) => {
    const habdleDropDown = (event) => {
        const id = event.currentTarget.id;
        const accordian = document.querySelector(`#accordian-${id}`);
        const button = document.querySelector(`.button-${id}`);
        const icon = document.querySelector(`.accordian-icon-${id}`);
        accordian.classList.toggle('hidden');
        button.classList.toggle(`accordian_open`);
        icon.classList.toggle('rotate-180');
    };

    const contentRef = useRef();

    useEffect(() => {
        contentRef.current.innerHTML = data.content;
    });

    return (
        <div key={data.id} className="pb-6">
            <button
                type="button"
                id={data.id}
                className={`button-${data.id} flex items-center justify-between w-full p-4 font-[400] text-left text-[#525A65] text-[20px] border border-[#525A65] rounded-[8px]`}
                onClick={habdleDropDown}>
                <span className="max-sm:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                    {data.title}
                </span>
                <svg
                    data-accordion-icon
                    className={`w-6 h-6 shrink-0 accordian-icon-${data.id} transition duration-300 ease-in`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                </svg>
            </button>

            <div className="hidden transition" id={`accordian-${data.id}`}>
                <div className="p-5 font-light border bg-white max-sm:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                    {/* custom content */}
                    <div className="custom-content" ref={contentRef}></div>
                    {/* end custom content */}
                </div>
            </div>
        </div>
    );
};
export default Accordian;

Accordian.propTypes = {
    data: PropTypes.object
};
