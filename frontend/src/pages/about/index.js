import React from 'react';
import Section from '../../components/about/MiddleSection';
import HeroSection from '../../components/about/HeroSection';
import AboutNav from '../../components/about/AboutNav';
import Goals from '../../components/about/Goals';
import OurTeam from '../../components/about/OurTeam';
import PageLayout from '../layout';

const AboutPage = () => {
    return (
        <PageLayout>
            <HeroSection />
            <AboutNav />
            <Section />
            <Goals />
            <OurTeam />
        </PageLayout>
    );
};

export default AboutPage;
