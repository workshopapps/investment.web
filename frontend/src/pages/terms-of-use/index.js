import React from 'react';

//component
import Term from '../../components/terms-of-use/Term';
import PageLayout from '../layout';
import logo from '../../assets/images/logo.png';

//Data file
import { termsData } from './termsData';

const TermsAndConditionPage = () => {
    return (
        <PageLayout>
            <div className="bg-[#f5f5f5] font-Hauora">
                <div className="py-32 container mx-auto max-sm:px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 text-center ">
                    <img src={logo} alt="logo" className="m-auto" />
                    {/* */}
                    <h2 className="font-[600] max-sm:text-[24px] sm:text-[33px] md:text-[40px] lg:text-[57px] pb-10">
                        <span className="text-[#1BD47B]">Yieldvest</span> Terms of Use
                    </h2>
                    <p className="max-sm:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] pb-10">
                        Last updated december 4, 2022
                    </p>
                    {/* */}
                    <section className="text-justify  max-sm:px-6 sm:px-8 md:px-12 lg:px-14 pt-8 bg-white rounded-lg pb-9">
                        {termsData.map((data, index) => (
                            <Term key={index} data={data} />
                        ))}
                    </section>
                    {/* */}
                </div>
            </div>
        </PageLayout>
    );
};

export default TermsAndConditionPage;
