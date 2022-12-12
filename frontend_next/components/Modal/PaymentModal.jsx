/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Cancel from "../../assets/cancel.svg";

import SuccessSign from "../../assets/paymentpage/icons/sucess.svg";
import CancelSign from "../../assets/paymentpage/icons/cancel.svg";
import { useRouter } from "next/router";


const PaymentModal = ({ status }) => {
    const navigate = useRouter().push;

    return (
        <Transition.Root show={true} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => navigate("/payment")}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[#0a0b0d] bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            {status ? (
                                <Dialog.Panel className="relative w-full transform overflow-hidden shadow-xl transition-all flex justify-center items-center">
                                    <div className="flex justify-center items-center flex-col ">
                                        <div
                                            className="mb-[8px] flex justify-end items-center rounded-lg w-full"
                                            nClose={() => navigate("/payment")}
                                        >
                                            <img
                                                src={Cancel.src}
                                                alt="Close"
                                                style={{ cursor: "pointer" }}
                                            />
                                        </div>
                                        <div className="bg-white w-[20em] flex flex-col items-center justify-start rounded-[8px] px-[54px] pt-[60px] pb-[34px] gap-5">
                                            <img src={SuccessSign.src} alt="Success" />
                                            <div className="text">
                                                <p className="text-[#000718] text-center text-[18px] font-[400]">
                                                    Payment successful
                                                </p>
                                            </div>
                                            <div>
                                                <button
                                                    className="rounded-[8px] bg-[#1BD47B] border-none text-[#1F2226] p-2 px-4"
                                                    onClick={() => navigate("/settings")}
                                                >
                                                    Back to Home
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            ) : (
                                <Dialog.Panel className="relative w-full transform overflow-hidden shadow-xl transition-all flex justify-center items-center">
                                    <div className="flex justify-center items-center flex-col ">
                                        <div
                                            className="mb-[8px] flex justify-end items-center rounded-lg w-full"
                                            nClose={() => navigate("/payment")}
                                        >
                                            <img
                                                src={Cancel.src}
                                                alt="Close"
                                                style={{ cursor: "pointer" }}
                                            />
                                        </div>
                                        <div className="bg-white w-[20em] flex flex-col items-center justify-start rounded-[8px] px-[54px] pt-[60px] pb-[34px] gap-5">
                                            <img src={CancelSign.src} alt="Cancel" />
                                            <div className="text">
                                                <p className="text-[#000718] text-center text-[18px] font-[400]">
                                                    Payment unsuccessful
                                                </p>
                                            </div>
                                            <div>
                                                <button
                                                    className="rounded-[8px] bg-[#1BD47B] text-[#1F2226] p-2 px-4"
                                                    onClick={() => navigate("/payment")}
                                                >
                                                    Try Again
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            )}

                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
};

export default PaymentModal;
