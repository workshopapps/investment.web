import React from 'react';
import PropTypes from 'prop-types';
import MailIcon from '../../../assets/resetPassword/mail.png';
import { BiErrorCircle } from 'react-icons/bi';
import { ClapSpinner } from 'react-spinners-kit';

const ResetModal = ({ close, status = '' }) => {
    let success, error, loading;
    error = (
        <div className="absolute top-0 font-Hauora right-0 w-full h-full bg-black/70 flex items-center justify-center">
            <div className=" w-full h-full  bg-white  md:w-[658px] md:h-[508px]  md:rounded-lg flex flex-col gap-4 items-center justify-center">
                <h4 className="text-2xl text-[#000718]">Error sending email</h4>
                <BiErrorCircle className="text-7xl text-red-500 " />
                <button
                    className="bg-[#1BD47B] text-sm w-[344px] h-[52px] rounded-lg"
                    onClick={() => {
                        close();
                    }}>
                    Close
                </button>
            </div>
        </div>
    );
    // dd
    success = (
        <div className="absolute top-0 font-Hauora right-0 w-full h-full bg-black/70 flex items-center justify-center">
            <div className=" w-full h-full  bg-white  md:w-[658px] md:h-[508px]  md:rounded-lg flex flex-col gap-8 items-center justify-center">
                <h4 className="text-2xl text-[#000718]">Check your Email</h4>
                <img src={MailIcon} alt="Success" />
                <p className="text-[#545964]">
                    A link has been sent to your email address to reset your password
                </p>
                <button
                    className="bg-[#1BD47B] text-sm w-[344px] h-[52px] rounded-lg"
                    onClick={() => {
                        close();
                    }}>
                    Go To Mail
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
    return status === 'success' ? success : status === 'error' ? error : loading;
};

ResetModal.propTypes = {
    close: PropTypes.func,
    status: PropTypes.string
};
export default ResetModal;
