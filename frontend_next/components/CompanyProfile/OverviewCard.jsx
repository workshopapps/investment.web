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
    <div className="hover:shadow-xl flex flex-col text-[#5C5A5A] bg-white rounded-xl border justify-center px-4 md:px-10 py-5 mb-6 font-Hauora">
      <div className="flex-row flex align-middle justify-between gap-1">
        <span className="text-lg md:text-xl font-sans font-bold pt-2">
          {name}
        </span>
        <button className="text-sm md:text-base p-3 bg-[#D9D9D9] rounded-xl h-fit">
          {companyId}
        </button>
      </div>
      <div className="flex-row flex align-middle justify-start my-3">
        <span className="text-xl md:text-2xl font-semibold pt-3">${price}</span>
      </div>
      <div className="flex-row flex align-middle justify-between">
        <div className="w-[100%] text-base font-sans flex flex-row font-light pt-3">
          <span className="mr-2">Industry:</span>
          {industry}
        </div>
        {/* <div className="w-[50%] flex flex-row justify-end text-right text-base pr-3 font-sans font-light pt-3 gap-0 md:gap-2">
          <div className="flex justify-end">
            <img
              src={USFlag.src}
              alt="Flag"
              width="40px"
              height="5em"
              className="flex h-6 justify-end"
            />
          </div>
          <p>United States</p>
        </div> */}
      </div>
      <div className="flex-row mt-2 flex align-middle justify-between">
        <div className="w-[50%] text-base flex flex-row font-light pt-3">
          <span className="mr-2">MARKET CAP:</span>
        </div>
        <div className="w-[50%] flex flex-row justify-end text-right text-base pr-3 font-sans font-light pt-3 gap-2">
          <p>{market_cap}B</p>
        </div>
      </div>
      <div className="flex-row my-2 flex align-middle justify-between">
        <div className="w-[50%] text-base flex flex-row font-light pt-3">
          <span className="mr-2">STOCK PRICE:</span>
        </div>
        <div className="w-[50%] flex flex-row justify-end text-right text-base pr-3 font-sans font-light pt-3 gap-2">
          <p>{stock_price}</p>
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
