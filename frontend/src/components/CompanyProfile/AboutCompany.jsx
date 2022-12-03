import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@headlessui/react';
import Cancel from '../../assets/company-profile/cancel.svg';

const AboutCompanyCard = ({ description }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="bg-white border rounded-xl my-2 hover:shadow-xl">
            <p className="md:text-base text-justify text-xs font-semibold text-[#8A8D95] px-4 md:px-10 py-6">
                {description}
                <br />
                <br />
                <span className=" text-[#0F7544] cursor-pointer" onClick={() => setIsOpen(true)}>
                    Read more
                </span>
                <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50">
                        <Dialog.Panel className="bg-white w-full md:w-2/3 rounded-lg p-10">
                            <Dialog.Title className="font-Hauora font-semibold text-lg md:text-4xl">
                                About
                            </Dialog.Title>

                            <p className="md:text-base text-justify text-xs mt-5 font-semibold text-[#8A8D95]">
                                {description}
                            </p>
                        </Dialog.Panel>
                        <div className="relative">
                            <div className="fixed top-[5em] md:top-[10em]">
                                <img src={Cancel} alt="cancel" />
                            </div>
                        </div>
                    </div>
                </Dialog>
            </p>
        </div>
    );
};

AboutCompanyCard.propTypes = {
    description: PropTypes.string
};

export default AboutCompanyCard;
