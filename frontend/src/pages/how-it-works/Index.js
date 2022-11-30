import React from 'react';
import PageLayout from '../layout';
import signUpImg from '../../assets/how-it-works/signUpImg.png';
import setUpImg from '../../assets/how-it-works/setUpImg.png';
import getImg from '../../assets/how-it-works/getImg.png';
import arrowRight from '../../assets/how-it-works/arrow-right.png';
import arrow from '../../assets/how-it-works/m-arr-1.png';
import { Link } from 'react-router-dom';

const Index = () => {
    const process = [
        {
            id: '1',
            image: signUpImg,
            headingText: 'Sign up for your free account',
            subText: 'Open a premium account for full functionality',
            subText2: 'Learn more',
            arrow: arrow
        },
        {
            id: '2',
            image: setUpImg,
            headingText: 'Set up your account',
            subText: 'Create your profile and answer our short quiz on your risk appetite',
            arrow: arrow
        },
        {
            id: '3',
            image: getImg,
            headingText: 'Get your custom-made recommendations',
            subText:
                'From the short quiz, we understand your interests and curate stock options that are tailored to you'
        }
    ];

    return (
        <PageLayout>
            <div className="w-full h-full">
                <div className="how-bg h-48 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center gap-1">
                        <h1 className="font-HauoraBold text-2xl tracking-wide">How it works</h1>
                        <p className="tracking-wide">Investing in 3 Easy Steps!</p>
                    </div>
                </div>
                <div className="p-10 flex flex-col gap-8">
                    {process?.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col justify-center gap-10">
                                <div className="flex">
                                    <p className="px-3 py-1 border border-black rounded-full">
                                        {item?.id}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <img src={item?.image} width={'250px'} />
                                    <h1 className="font-HauoraBold text-sm text-center">
                                        {item?.headingText}
                                    </h1>
                                    <p className="text-sm text-center">{item?.subText}</p>
                                    {item?.subText2 && (
                                        <p className="text-sm text-green-500 cursor-pointer hover:text-green-600 transition ease-in-out delay-100">
                                            {item?.subText2}
                                        </p>
                                    )}
                                    {item?.arrow && <img src={item?.arrow} className="mt-4" />}
                                </div>
                            </div>
                        );
                    })}

                    <div className="flex justify-center mt-6">
                        <Link
                            to={'/signup'}
                            className="text-sm flex items-center gap-2 bg-green-400 py-3 px-6 rounded-md hover:bg-green-500 transition ease-in-out delay-100">
                            <p>Get Started</p>
                            <img src={arrowRight} />
                        </Link>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default Index;
