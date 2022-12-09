import React from 'react';
import PageLayout from '../../layout';
import MailIcon from '../../../assets/resetPassword/mail.png';

const EmailVerification = () => {
    return (
        <PageLayout showFooter={false}>
            <div className="relative md:static md:bg-desk-signup h-full font-hauora flex flex-col items-center md:justify-center ">
                <div className="absolute top-0 font-Hauora right-0 w-full h-full bg-black/70 flex items-center justify-center">
                    <div className=" w-full h-full px-4 bg-white  md:w-[658px] md:h-[508px]  md:rounded-lg flex flex-col gap-8 items-center justify-center">
                        <h4 className="text-2xl text-[#000718] text-center">
                            Check your Email for account verification
                        </h4>
                        <img src={MailIcon} alt="Success" />
                        <p className="text-[#545964] text-center">
                            A link has been sent to your email address to verify your account
                        </p>
                        <a
                            href="https://mail.google.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#1BD47B] text-sm w-[344px] h-[52px] rounded-lg flex justify-center items-center"
                            onClick={() => {
                                close();
                            }}>
                            Go To Mail
                        </a>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default EmailVerification;
