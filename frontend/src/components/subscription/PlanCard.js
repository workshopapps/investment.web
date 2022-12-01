import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SubscribeCard = ({
    name,
    price,
    type,
    target,
    priceId,
    payload,
    features,
    mode,
    buttonText
}) => {
    console.log(features);
    switch (mode) {
        case 'secondary':
            return (
                <div className=" bg-[#1BD47B] text-[white] rounded-2xl border-[1px] border-[rgba(141, 141, 141, 0.2)] w-[28em] h-auto md:h-[40em] mb-5 md:mb-5 lg:mb-0 hover:shadow-md">
                    <p className="text-[white] text-[24px] pl-6 pt-8 ">{name}</p>
                    <h1 className="pl-5 md:pl-6 py-2">
                        <span className="text-white  text-3xl md:text-6xl mr-2 md:mr-[1em]">
                            &#8358;{price}
                        </span>
                        <span className="text-[#0A0B0D]"></span>/{type}
                    </h1>
                    <p className="pt-3 pl-6 pb-3 basicTextHolder">{target}</p>
                    <div className="w-full flex justify-center mb-3">
                        <hr className="w-0 md:w-full mx-5 sm:border-[white] md:border-[white]" />
                    </div>

                    <ul className="w-full theListing list-inside pl-6 pt-2">
                        {features.map((element, index) => (
                            <li key={index} className="flex items-center py-2">
                                <FaCheckCircle fill="white" />
                                <p className="pl-3">{element}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10 md:mt-10 lg:mt-40 mb-10 md:mb-10 lg:mb-10 flex justify-center">
                        <Link
                            to={'/payment'}
                            state={{
                                state: payload,
                                priceId: priceId
                            }}
                            className="w-[80%] flex hover:shadow-xl justify-around md:justify-around lg:justify-center shadow bg-[white] text-[#1BD47B] font-bold py-2 px-4 rounded">
                            <button className="flex rounded " type="button">
                                <span className="text-[#1F2226] align-middle">{buttonText}</span>

                                {/* <img className="w-3 mt-2 h-3  ml-1" src={ArrowIcons} alt="arrow" /> */}
                                <FaArrowRight className="w-3 mt-1 text-[#1F2226] h-3  ml-1" />
                            </button>
                        </Link>
                    </div>
                </div>
            );
        default:
            return (
                <div className=" bg-white rounded-2xl border-[1px] border-[rgba(141, 141, 141, 0.2)] w-[28em] h-auto md:h-[40em] mb-5 md:mb-5 lg:mb-0 hover:shadow-md">
                    <p className="text-[#0A0B0D] text-[24px] pl-6 pt-8 ">{name}</p>
                    <h1 className="pl-5 md:pl-6 py-2">
                        <span className="text-[#1BD47B] text-3xl md:text-6xl mr-2 md:mr-[1em]">
                            &#8358;{price}
                        </span>
                        <span className="text-[#0A0B0D]"></span>/{type}
                    </h1>
                    <p className="pt-3 pl-6 pb-3 basicTextHolder">{target}</p>
                    <div className="w-full flex justify-center mb-3">
                        <hr className="w-0 md:w-full mx-5 sm:border-[white] md:border-[white] lg:border-[#0A0B0D]" />
                    </div>

                    <ul className="w-full theListing list-inside pl-6 pt-4">
                        {features.map((element, index) => (
                            <li key={index} className="flex items-center py-2">
                                <FaCheckCircle fill="#1BD47B" />
                                <p className="pl-3">{element}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-[6em] mb-10 flex justify-center">
                        <Link
                            to={'/payment'}
                            state={{
                                state: payload,
                                priceId: priceId
                            }}
                            className="w-[80%] flex hover:shadow-xl justify-around md:justify-around lg:justify-center shadow bg-[#1BD47B] text-white font-bold py-2 px-4 rounded">
                            <button className="flex rounded shadow" type="button">
                                <span className="text-[#1F2226] align-middle">{buttonText}</span>
                            </button>
                        </Link>
                    </div>
                </div>
            );
    }
};

SubscribeCard.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    type: PropTypes.string,
    target: PropTypes.string,
    priceId: PropTypes.string,
    features: PropTypes.array,
    payload: PropTypes.object,
    mode: PropTypes.string,
    buttonText: PropTypes.string
};

export default SubscribeCard;
