/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

import USFlag from "../../assets/company-profile/US.png";

const OverviewCard = ({
  companyId,
  name,
  price,
  industry,
  market_cap,
  stock_price,
}) => {
  return (
    <div className="flex flex-col text-[#5C5A5A] bg-white rounded-xl md:border justify-center px-2 md:px-5 py-5 mb-6 font-Hauora">
      <div className="flex-row flex align-middle justify-between gap-1">
        <span className="text-[16px] md:text-xl font-sans font-bold pt-2">
          {name}
        </span>
        <button className="text-sm md:text-base p-3 px-7 bg-[#D9D9D9] rounded-xl h-fit">
          {companyId}
        </button>
      </div>
      {/* <div className="flex-row flex align-middle justify-start my-3">
        <span className="text-xl md:text-2xl font-semibold pt-3">${price}</span>
      </div> */}
      <div className="flex-row mt-2 flex align-middle justify-between">
        <div className="w-[50%] text-base flex flex-row font-light pt-3">
          <span className="mr-2">Stock Price:</span>
        </div>
        <div className="w-[50%] flex flex-row justify-end text-right text-base pr-3 font-sans font-bold pt-3 gap-2">
          <p>{stock_price}</p>
        </div>
      </div>
      <div className="flex-row flex align-middle justify-between">
        <div className="w-[30%] text-base flex flex-row font-light pt-3">
          <span className="mr-2">Industry:</span>
        </div>
        <div className="w-[70%] flex flex-row justify-end text-right text-base pr-3 font-sans font-light pt-3 gap-2">
          <p>{industry}</p>
        </div>
      </div>
      <div className="flex-row mt-0 flex align-middle justify-between">
        <div className="w-[50%] text-base flex flex-row font-light pt-3">
          <span className="mr-2">Market Cap:</span>
        </div>
        <div className="w-[50%] flex flex-row justify-end text-right text-base pr-3 font-sans font-light pt-3 gap-2">
          <p>{market_cap}B</p>
        </div>
      </div>
    </div>
  );
};

OverviewCard.propTypes = {
  companyId: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  industry: PropTypes.string,
  market_cap: PropTypes.string,
  dividend_yield: PropTypes.string,
};

export default OverviewCard;
