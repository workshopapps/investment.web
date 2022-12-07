import React from "react";
import Section from "../../components/about/MiddleSection";
import HeroSection from "../../components/about/HeroSection";
import AboutNav from "../../components/about/AboutNav";
import Goals from "../../components/about/Goals";
import OurTeam from "../../components/about/OurTeam";
import Layout from "../../components/Layout";
import Head from "next/head";

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>About Yieldvest</title>
        <meta
          name="description"
          content="We Track, Analyze & Recommend the best stocks for you"
        />
      </Head>

      <HeroSection />
      <AboutNav />
      <Section />
      <Goals />
      <OurTeam />
    </Layout>
  );
};

export default AboutPage;
