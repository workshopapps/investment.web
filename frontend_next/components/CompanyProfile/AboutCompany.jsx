/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import { Dialog } from "@headlessui/react";
import Cancel from "../../assets/company-profile/cancel.svg";

const AboutCompanyCard = ({ description }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-md my-2">
      <p
        className="md:text-base text-xs font-regular text-[#8A8D95] px-2 md:px-5 py-6"
        style={{ lineHeight: "30px" }}
      >
        {description.slice(0, 600)}...
        <br />
        <br />
        <span
          className=" text-[#0F7544] underline cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Read more
        </span>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50">
            <Dialog.Panel className="bg-white w-full md:w-2/3 rounded-lg p-10">
              <Dialog.Title className="font-Hauora font-semibold text-lg md:text-4xl">
                About
              </Dialog.Title>

              <p className="md:text-base text-xs mt-5 font-semibold text-[#8A8D95]">
                {description}
              </p>
            </Dialog.Panel>
            <div className="relative">
              <div className="fixed top-[5em] md:top-[10em]">
                <img src={Cancel.src} alt="cancel" />
              </div>
            </div>
          </div>
        </Dialog>
      </p>
    </div>
  );
};

AboutCompanyCard.propTypes = {
  description: PropTypes.string,
};

export default AboutCompanyCard;
