import React from "react";
import Faq from "../../components/Help/Faq";
import Layout from "../../components/Layout";
import HeroSection from "../../components/Help/HeroSection";
import faiq from "../../utils/HelpData.json";

function HelpPage() {
  const faqs = {
    faq: [
      {
        question: "What is Yieldvest used for?",
        answer:
          "It allows you to see the best performing stocks in the market to buy and top companies to invest in at the moment. Yieldvest has a simple, straightforward user interface that shows real-time portfolio data, market value and growth potential of top companies and stocks.",
      },
      {
        question: "Can I trade stocks on this platform?",
        answer:
          "No. Yieldvest only provides information and suggestions on company's stocks to buy. After you must have known the stocks to buy, head over to the listed stock trading platform to buy and build your portfolio",
      },
      {
        question: "How can I know stocks that fit my investment goals?",
        answer:
          "On the platform, stocks are categorized based on big, small or mid cap. This is done so you can make informed decisions based on your financial status and risk appetite. Information that can guide you in making decisions is also provided.",
      },
      {
        question: "How can I know more about the company to invest in?",
        answer:
          "On Yieldvest, every company has their details and company portfolio listed, obtained from reliable sources.",
      },
      {
        question: "I have no experience in stocks. Is this for me?",
        answer:
          "Yes, anyone interested in stocks can use it, even complete beginners. Yieldvest is easy to use.",
      },
      {
        question: "How can I access the platform?",
        answer:
          "Yieldvest is available as a website and a desktop application. This means you can access it on your mobile, as you go. And also on any computer, whether laptop or desktop.",
        link: "Download for Desktop",
      },
    ],
    popular_questions: [
      {
        question: "Is Yieldvest reliable?",
        answer:
          "You can be sure that this is a reliable service. Decisions are made based on credible algorithms and metrics.",
      },
      {
        question: "What is Big, Small and Mid Cap?",
        answer:
          "Big-cap corporations are those with market capitalizations of US$10 billion and greater, which tend to grow more slowly than mid-cap companies. They are less volatile than mid and small cap investments. Mid-cap companies are those with capitalization between $2 and $10 billion. Small-cap corporations have between $300 million and $2 billion. They are very volatile.",
      },
      {
        question: "Are your services free?",
        answer:
          "Yes. You have access to our big and mid cap stock recommendations. However, to access small caps, you will need to pay a little price to subscribe for our premium service.",
      },
      {
        question: "Do I need to have an account to use the platform?",
        answer:
          "No. You don't need an account to view big and mid cap stocks. However you should create a premium account to also access small cap stocks services and other premium features.",
      },
      {
        question: "I can't see the small cap stocks. Why is that?",
        answer:
          "You can view small cap stocks and other premium services with a premium account.",
      },
      {
        question: "I can only view 10-15 stocks per cap category. Why is that?",
        answer:
          "This happened because you do not use our premium services. Once you've upgraded to a premium account,you would have access to unlimited stock views..",
      },
    ],
  };
  return (
    <Layout>
      <HeroSection data={faiq} />
      <div className="py-8 font-Hauora sm:py-12 md:py-14 lg:py-16  lg:pb-16 px-4 sm:px-10 md:px-14 lg:px-32 xl:px-[206px] flex flex-col w-full">
        <div className="mt-6 sm:mt-8 lg:mt-10 text-[#0A0B0D]">
          <h2 className="font-bold lg:text-semibold sm:text-lg md:text-xl lg:text-2xl text-base text-[#0B5934] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="w-full ">
            {faqs.faq.map((faq, index) => (
              <Faq
                key={index}
                question={faq.question}
                answer={faq.answer}
                link={faq.link}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-10">
          <h2 className="font-bold lg:text-semibold sm:text-lg md:text-xl lg:text-2xl text-base text-[#0B5934] mb-8">
            Popular Questions
          </h2>

          {faqs.popular_questions.map((faq, index) => (
            <Faq key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default HelpPage;
