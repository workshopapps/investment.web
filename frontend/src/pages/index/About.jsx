/* eslint-disable prettier/prettier */
import React from 'react';
import AboutNav from '../../components/about/AboutNav';
import Goals from '../../components/about/Goals';
import HeroSection from '../../components/about/HeroSection';
import Section from '../../components/about/MiddleSection';
import OurTeam from '../../components/about/OurTeam';

const AboutPage = () => {
  return (
    <div className="bg-[#fafaff] text-[#455A64]">
      <HeroSection />
      <AboutNav />
      <Section />
      <Goals />
      <OurTeam />
    </div>
  );
};

export default AboutPage;
