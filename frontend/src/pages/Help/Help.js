import React from 'react';
import Faq from './Faq';
import searchIcon from './search.svg';

function Help() {
    return (
        <div className="pt-16 pb-8 lg:pb-[70px] px-4 lg:px-[206px] flex flex-col w-full">
            <h1 className="font-bold text-xl lg:text-[40px] lg:font-semibold mb-4 text-[#0A0B0D]">
                How Can We Help You?
            </h1>
            <div className="flex h-14 border px-3 focus-within:border-black border-[#A3AAB2] rounded">
                <input
                    className="placeholder:text-xs pr-3 lg:placeholder:text-base placeholder:font-normal placeholder:text-[#A3AAB2] w-full focus:outline-0 "
                    type="text"
                    placeholder="Ask Your Question"
                />
                <button>
                    <img src={searchIcon} className="w-6" alt="search" />
                </button>
            </div>

            <div className="mt-5 lg:mt-11">
                <h2 className=" font-bold lg:text-semibold lg:text-2xl text-base text-[#0A0B0D]">
                    Frequently Asked Questions
                </h2>
                <Faq />
                <Faq />
            </div>

            <div className="mt-6">
                <h2 className=" font-bold text-base lg:text-semibold lg:text-2xl text-[#0A0B0D]">
                    Popular Questions{' '}
                </h2>
            </div>
        </div>
    );
}

export default Help;

//   const faq = {
//       faq: [
//           {
//               question: 'Is Mystockplug safe and good?',
//               answer: 'This is a safe platform where users can see good stocks to buy. Our website has done all the work for  users, all users need to do is choose a stock that is within their financial capacity.'
//           },
//           {
//               question: 'Do I need to have an account to use the App?',
//               answer: 'As a user, you do not need to create an account before you can have access to our application.'
//           },
//           {
//               question: 'What is big, mid, and small cap?',
//               answer: 'Market capitalization is the value of all outsatnding shares of a cooperation, Large-cap cooperation are those with market capitalization of US $10 billion and greater. Mid-cap companies are those with capitalization between $2 billion and $10 billion, while small-cap companies rages between $300 million and $2 billion.'
//           },
//           {
//               question: 'How can I know stocks to invest in?',
//               answer: 'Users can look at stock price, revenue growth, market capitalization of a stock company in other to decide where to invest in.'
//           }
//       ],
//       popular_questions: [
//           {
//               question: 'I have no experience in stock, Is this for me?',
//               answer: 'Mystockplug allow users with no idea about stock or no experience in stock guse the app without hassle. The app does all the neccessary analysis before displaying the best stock to invest in.'
//           },
//           {
//               question: 'What is MYstockplug use for?',
//               answer: 'To be the go-to app for prospective investors to know what stocks to buy by providing them with well curated information that will help them make smarter investments decisions, this will increase users trust and satisfaction in stock investment.'
//           },
//           {
//               question: 'How can I know more about the company to invest in?',
//               answer: 'After user has seen a stock cap, users can click on the stock company to see full review about the chosen stock. users can laern more about the company on the product review page.'
//           },
//           {
//               question: 'Is this accessible on my phone and computer?',
//               answer: 'The platform is a web app and desktop app based. users can choose to use the app  on a web or download the desktop app into their computer.'
//           },
//           {
//               question: 'Can I trade stocks on this platform?',
//               answer: 'This is a safe platform where users can see good stocks to buy. Our website has done all the work for users, all users need to do is choose a stock that is within their financial capacity.'
//           },
//           {
//               question: 'Are your services free?',
//               answer: 'Using the platform is free but paying a small amount gets users more benefit. Users have access to small-cap stock companies and users can have full access to more than 15 good stock options to invest in.'
//           }
//       ]
//   };
//   console.log(faq);
