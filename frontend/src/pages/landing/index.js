import React, { useContext } from 'react';
import PageLayout from '../layout';
import { UserStatusContext } from '../../store/UserStatusContext';
import HeaderSection from '../../components/landingPage/HeaderSection/HeaderSection';
import HowToSection from '../../components/landingPage/HowToSection/HowToSection';
import ReviewSection from '../../components/landingPage/ReviewSection/ReviewSection';
import FAQSection from '../../components/landingPage/FAQSection/FAQSection';

const LandingPage = () => {
    const { logged } = useContext(UserStatusContext);
    console.log(logged);
    return (
        <PageLayout>
            <HeaderSection />

            <HowToSection />

            <ReviewSection />

            <FAQSection />
        </PageLayout>
    );
};

export default LandingPage;
