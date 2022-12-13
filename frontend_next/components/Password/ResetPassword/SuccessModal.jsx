/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import SuccessIcon from "../../../assets/resetPassword/success.png";
import { BiErrorCircle } from "react-icons/bi";
import { ClapSpinner } from "react-spinners-kit";
import { useRouter } from "next/router";

const ResetModal = ({ close, status = "", title, message }) => {
  let success, error, loading;
  const navigate = useRouter().push;

  error = (
    <div className="absolute top-0 font-Hauora right-0 w-full h-full bg-black/70 flex items-center justify-center">
      <div className=" w-full h-full  bg-white  md:w-[658px] md:h-[508px]  md:rounded-lg flex flex-col gap-4 items-center justify-center">
        <h4 className="text-2xl text-[#000718]">Error resetting password</h4>
        <BiErrorCircle className="text-7xl text-red-500 " />
        <button
          className="bg-[#1BD47B] text-sm w-[344px] h-[52px] rounded-lg"
          onClick={() => {
            close();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
  success = (
    <div className="absolute top-0 font-Hauora right-0 w-full h-full bg-black/70 flex items-center justify-center z-[200]">
      <div className=" w-full h-full  bg-white  md:w-[658px] md:h-[508px]  md:rounded-lg flex flex-col gap-8 items-center justify-center">
        <h4 className="text-2xl text-[#000718]">
          {title ? title : "Password Reset Successful"}
        </h4>
        <img src={SuccessIcon.src} alt="Success" />
        <p className="text-[#545964]">
          {message
            ? message
            : "Congratulations! Your password has been reset successfully."}{" "}
        </p>
        <button
          className="bg-[#1BD47B] text-sm w-[344px] h-[52px] rounded-lg"
          onClick={() => {
            close ? close() : null;
            navigate("/login");
          }}
        >
          Done
        </button>
      </div>
    </div>
  );

  loading = (
    <div className="absolute top-0 font-Hauora right-0 w-full h-full bg-black/70 flex items-center justify-center">
      <div className=" w-full h-full  bg-white  md:w-[658px] md:h-[508px]  md:rounded-lg flex flex-col gap-8 items-center justify-center">
        <ClapSpinner size={80} />
        <p className="text-lg ">Loading...</p>
      </div>
    </div>
  );
  return status === "success" ? success : status === "error" ? error : loading;
};

ResetModal.propTypes = {
  close: PropTypes.func,
  status: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
};
export default ResetModal;
