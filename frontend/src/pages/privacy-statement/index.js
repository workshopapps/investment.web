import React from 'react';

//Data file
import { policyData } from './policyData';

//Images
import HeroBg1 from '../../assets/policy-statement/image/Data-dirl.png';
import HeroBg2 from '../../assets/policy-statement/image/Free-girl.png';
import HeroBg3 from '../../assets/policy-statement/image/studio.png';

//Components
import PageLayout from '../layout';
import Card from '../../components/policy-statement/card/Card';
import Accordian from '../../components/policy-statement/accordian/Accordian';

const PolicyStatement = () => {
    return (
        <PageLayout>
            <div className="bg-[#f5f5f5] font-Hauora">
                <div className="py-32 container mx-auto max-sm:px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 text-center ">
                    {/* */}
                    <h2 className="font-[600] max-sm:text-[24px] sm:text-[33px] md:text-[40px] lg:text-[57px]">
                        YieldVest Privacy Statement
                    </h2>
                    {/* */}
                    <section className="max-sm:px-6 sm:px-8 md:px-12 lg:px-14 pt-8">
                        <p className="max-sm:text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                            At YieldVest we take your privacy very seriously. It is important to us
                            that you understand your rights in how we handle your personal
                            information. Our diligent privacy team meticulously review our products
                            before they go live, so you can expect the best from us.
                        </p>
                    </section>
                    {/* */}
                    <h3 className="font-[600] max-sm:text-[20px] sm:text-[26px] md:text-[32px] lg:text-[40px] mt-10">
                        Your Privacy Is Your Right
                    </h3>
                    {/* */}

                    <Card
                        classStyle1="policy_card_div"
                        imageStyle="policy_card"
                        textStyle="policy_card_text"
                        textHeader="Your Information"
                        contentOne="You have the right to understand and control how your personal
                    information should be used"
                        contentTwo="If you have any requesta about personal information, feel free to
                    contact us at privacy@yieldvest.ng"
                        image={HeroBg1}
                    />
                    <Card
                        classStyle1="policy_card_div_reverse"
                        textStyle="policy_card_text_reverse"
                        imageStyle="policy_card_reverse"
                        textHeader="Our Duty To You"
                        contentOne="We strive to be as transparent as possible when it comes to explaining how we collect and use your personal information."
                        contentTwo="We do not collect your information without telling you the reasons. When needed, we provide you with the means to exercise your rights. Adjust your preferences at any time"
                        image={HeroBg2}
                    />

                    <Card
                        classStyle1="policy_card_div"
                        textStyle="policy_card_text"
                        imageStyle="policy_card"
                        textHeader="Protecting Your Info"
                        contentOne="Our data security system is industry standard, and is routinely independently tested and audited to keep your personal information safe and secure."
                        contentTwo=""
                        image={HeroBg3}
                    />
                </div>
                <div className="container mx-auto max-sm:px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48">
                    <h3 className="font-[600] max-sm:text-[20px] sm:text-[26px] md:text-[32px] lg:text-[40px] mb-10 text-center">
                        Our detailed privacy policy
                    </h3>

                    {policyData.map((data, index) => (
                        <Accordian key={index} data={data} />
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};
export default PolicyStatement;
