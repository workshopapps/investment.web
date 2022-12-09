/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

import Image from "../../assets/subscriptionPage/images/banner.svg";
import Image2 from "../../assets/subscriptionPage/images/banner-white.svg";
import { useRouter } from "next/router";

const SubscribeCard = ({
  name,
  discount,
  price,
  type,
  target,
  priceId,
  features,
  buttonText,
  content,
  destination,
}) => {
  const router = useRouter();

  const handleSubscription = () => {
    const data = {
      priceId: priceId,
      subName: name,
      type: type,
      price: discount,
      content: content,
    };
    sessionStorage.setItem("subscriptionData", JSON.stringify(data));
    router.push(destination);
  };

  return (
    <div className="group hover:scale-90 transition duration-500 relative hover:bg-[#1BD47B] bg-white text-[#0A0B0D] hover:text-white rounded-2xl border-[1px] border-[rgba(141, 141, 141, 0.2)] max-w-[20em] md:w-[25em] h-auto md:h-[42em] mb-5 md:mb-5 lg:mb-0 hover:shadow-md p-2 pt-[5em] md:pt-0">
      {price !== "" && (
        <div>
          <img
            className="group-hover:hidden flex absolute left-[-2.5em] top-[-1.3em] overflow-scroll px-10 py-5 text-white "
            src={Image.src}
            alt="image"
          />
          <img
            className="hidden group-hover:flex absolute left-[-2.5em] top-[-1.3em] overflow-scroll px-10 py-5 text-white "
            src={Image2.src}
            alt="image"
          />
        </div>
      )}

      <div className="flex flex-row md:flex-col justify-between">
        <p className="text-[24px] pl-6 pt-8 pb-10 w-full text-center">{name}</p>
        <h1 className="px-4 md:pl-6 py-2 pt-10 md:pt-0">
          <span className="text-[#1BD47B] group-hover:text-white text-xl md:text-6xl mr-2 md:mr-5">
            ${discount}
          </span>
          <span className="opacity-60">
            <span className="text-[#1BD47B] group-hover:text-white line-through">
              {price !== "" && `$${price}`}
            </span>
            /{type}
          </span>
        </h1>
      </div>
      <p className="pt-3 pl-6 pb-5 basicTextHolder">{target}</p>
      <div className="w-full flex justify-center mb-3">
        <hr className="w-0 md:w-full mx-5 sm:border-[white] md:border-[white] lg:border-[#0a0b0d2b] group-hover:border-white" />
      </div>

      <ul className="w-full theListing list-inside pl-6 pt-4 mb-[8em] md:mb-0">
        {features.map((element, index) => (
          <li key={index} className="flex items-center py-2">
            <FaCheckCircle
              fill="#1BD47B"
              className="group-hover:hidden block"
            />
            <FaCheckCircle fill="white" className="group-hover:block hidden" />
            <p className="pl-3">{element}</p>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-1 right-1 mt-[6em] mb-10 flex justify-center">
        <div
          className="w-[80%] flex justify-around md:justify-around lg:justify-center shadow bg-[#1BD47B] group-hover:bg-white text-white font-bold py-4 px-6 rounded"
          onClick={handleSubscription}
        >
          <button className="flex rounded" type="button">
            <span className="text-[#1F2226] align-middle">{buttonText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

SubscribeCard.propTypes = {
  name: PropTypes.string,
  discount: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
  target: PropTypes.string,
  priceId: PropTypes.string,
  features: PropTypes.array,
  buttonText: PropTypes.string,
  destination: PropTypes.string,
};

export default SubscribeCard;
