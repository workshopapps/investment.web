import React, { useState } from 'react';
import PageLayout from '../../layout';
import ResetModal from './SuccessModal';
// import { useParams } from 'react-router-dom';

const ForgotPassword = () => {
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState('');
    // const [newPwd, setNewPwd] = useState('');
    // const [oldPwd, setOldPwd] = useState('');

    const formHandler = async (e) => {
        e.preventDefault();
        setShowModal(true);
    };
    return (
        <div className="relative">
            <PageLayout showFooter={false}>
                <div className="relative md:static md:bg-desk-signup h-screen font-hauora flex flex-col items-center md:justify-center ">
                    <div>
                        <h4 className="hidden md:block text-white text-2xl font-semibold text-center pb-6">
                            Buy stocks and grow your business
                        </h4>

                        <div className="px-4 md:px-10 py-12 bg-white md:rounded-lg">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-2xl text-[#000718]">Forget Password</h4>
                                <p className="text-[#545964]">
                                    Enter the email address you signed up with and we’ll send you a
                                    link to reset your password.
                                </p>
                            </div>
                            <form onSubmit={formHandler} action="" className="flex flex-col gap-6">
                                <div className="flex flex-col gap-1">
                                    <label className="" htmlFor="">
                                        Email
                                    </label>
                                    <input
                                        className="w-full border rounded-[4px] h-[56px] px-4 placeholder:text-sm"
                                        type="email"
                                        placeholder="Enter email address"
                                    />
                                </div>

                                <button className="bg-primary102 h-[52px] font-semibold w-full text-[#1F2226] text-center rounded-lg text-sm">
                                    Reset Password
                                </button>
                            </form>
                        </div>
                    </div>
                    {showModal && (
                        <ResetModal
                            status={status}
                            close={() => {
                                setShowModal(false);
                                setStatus('');
                            }}
                        />
                    )}
                </div>
            </PageLayout>
        </div>
    );
};

export default ForgotPassword;
