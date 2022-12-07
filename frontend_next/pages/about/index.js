import React from "react";
import Section from "../../components/about/MiddleSection";
import HeroSection from "../../components/about/HeroSection";
import AboutNav from "../../components/about/AboutNav";
import Goals from "../../components/about/Goals";
import OurTeam from "../../components/about/OurTeam";
import Layout from "../../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutNav />
      <Section />
      <Goals />
      <OurTeam />
    </Layout>
  );
};

export default AboutPage;
