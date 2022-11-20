import React from 'react';
import PropTypes from 'prop-types';
import { contactData, socialData } from '../../store/contactData/contactData';
import PageLayout from '../layout';

const ContactCard = ({ title, title2, text1, text1a, text2, text3, text4 }) => {
    return (
        <div className="flex flex-col gap-1 sm:gap-2">
            <span className="bg-[#0F7544] w-[58px] h-[2px]" />
            <h4 className=" md:text-lg">
                {title}
                <br />
                {title2}
            </h4>
            <div className="flex-col flex text-[#545964] gap-1 text-sm md:text-base">
                <p className="whitespace-normal">
                    {text1}
                    <br />
                    {text1a}
                </p>
                <p>{text2} </p>
                <p>{text3}</p>
                <p>{text4}</p>
            </div>
        </div>
    );
};

ContactCard.propTypes = {
    title: PropTypes.string,
    title2: PropTypes.string,
    text1: PropTypes.string,
    text1a: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    text4: PropTypes.string
};

const Contact = () => {
    const formHandler = (e) => {
        e.preventDefault();
    };
    return (
        <PageLayout>
            <div
                data-testid={'contact-test'}
                className="font-Hauora flex flex-col justify-center items-center py-20 px-4 md:px-[5rem] 2xl:px-[10rem]">
                <div className="flex flex-col gap-10 md:gap-14 md:justify-center md:items-center w-full">
                    <h4 className="font-semibold text-2xl md:text-4xl">Contact Us</h4>
                    <div className="flex flex-col gap-8 w-full">
                        <h4 className="text-[#0B5934] font-semibold text-lg md:text-2xl md:self-center md:text-center">
                            Got any concerns you want <br />
                            us to sort out for you?
                        </h4>
                        <div className=" flex flex-col gap-8 md:grid md:grid-cols-3 md:w-full  ">
                            {contactData.map((item) => (
                                <ContactCard
                                    key={item.key}
                                    title={item.title}
                                    title2={item.title2}
                                    text1={item.text1}
                                    text2={item.text2}
                                    text3={item.text3}
                                    text4={item.text4}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col gap-8 w-full md:self-center md:items-center md:justify-center ">
                            <h4 className="text-[#0B5934] font-semibold text-lg md:text-2xl md:self-center">
                                Follow us on all our <br />
                                social media pages.
                            </h4>
                            <div className=" flex flex-col  md:self-center gap-8 md:grid md:grid-cols-3 md:w-full ">
                                {socialData.map((item) => (
                                    <ContactCard
                                        key={item.key}
                                        title={item.title}
                                        text1={item.text1}
                                        text1a={item.text1a}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:w-full">
                            <h4 className="text-[#0B5934] font-semibold text-lg md:text-2xl md:self-center md:w-1/2 md:text-center">
                                Get practical tips and insider secrets to help you make the right
                                investments. .
                            </h4>
                            <div className=" md:self-center flex flex-col ">
                                <form
                                    action=""
                                    onSubmit={formHandler}
                                    className="flex flex-col gap-4">
                                    <input
                                        type="email"
                                        placeholder="Enter Email "
                                        className="border rounded-xl p-4"
                                    />
                                    <button className="text-[#1F2226] rounded-lg bg-[#1BD47B] w-full md:w-[596px] font-semibold text-sm md:text-base h-[52px]">
                                        Subscribe to our Newsletter
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Contact;
