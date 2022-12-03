import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import Cancel from './../../assets/cancel.svg';

const NotSubscribedModal = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
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
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <Dialog.Panel className="relative w-full transform overflow-hidden shadow-xl transition-all flex justify-center items-center">
                                <div className="flex justify-center items-center flex-col ">
                                    <div
                                        className="mb-[8px] flex justify-end items-center rounded-lg w-full"
                                        onClick={() => setOpen(false)}>
                                        <img src={Cancel} alt="" />
                                    </div>
                                    <div className="bg-white max-w-[441px] flex flex-col items-center justify-start rounded-[8px] px-[54px] pt-[60px] pb-[34px]">
                                        <div className="text">
                                            <p className="text-[#000718] mb-[35px] text-center text-[18px] font-[400]">
                                                Want access to Small Caps stocks? Subscribe now to
                                                any of our affordable plans
                                            </p>
                                        </div>
                                        <div>
                                            <button
                                                className="rounded-[8px] bg-[#1BD47B] text-[#1F2226] p-[16px]"
                                                onClick={() => navigate('/subscription')}>
                                                View Subscription Plans
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default NotSubscribedModal;
