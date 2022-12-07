/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";

const Card = ({
  textHeader,
  contentOne,
  contentTwo,
  image,
  classStyle1,
  classStyle2,
  imageStyle,
  textStyle,
}) => {
  return (
    <div className={`${classStyle1} container w-auto h-auto`}>
      <div className={`${textStyle} container h-auto w-full`}>
        <h3 className="font-[400] text-[32px] max-md:text-[27px] max-sm:text-left lg:text-[32px] mt-10 text-[#0B5934] pb-2">
          {textHeader}
        </h3>
        <p className="font-[400] max-sm:text-[14px] sm:text-[12px] max-sm:text-left md:text-[12px] lg:text-[14px] xl:text-[16px] text-[#66717E] pb-2">
          {contentOne}
        </p>
        <p className="font-[400] max-sm:text-[14px] sm:text-[12px] max-sm:text-left md:text-[12px] lg:text-[14px] xl:text-[16px] text-[#66717E]">
          {contentTwo}
        </p>
      </div>
      <div className="max-sm:px-3 order-1 h-auto max-sm:w-auto max-md:w-full max-lg:w-auto max-xl:3/6">
        <img className={`h-64 ${imageStyle}`} src={image} alt="hero image" />
      </div>
    </div>
  );
};

Card.propTypes = {
  textHeader: PropTypes.string,
  contentOne: PropTypes.string,
  contentTwo: PropTypes.string,
  image: PropTypes.any,
  classStyle1: PropTypes.string,
  classStyle2: PropTypes.string,
  imageStyle: PropTypes.string,
  textStyle: PropTypes.string,
};
export default Card;
