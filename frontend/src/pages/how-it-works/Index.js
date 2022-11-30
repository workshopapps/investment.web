import React from 'react';
import PageLayout from '../layout';
import signUpImg from '../../assets/how-it-works/signUpImg.png';
import setUpImg from '../../assets/how-it-works/setUpImg.png';
import getImg from '../../assets/how-it-works/getImg.png';
import arrowRight from '../../assets/how-it-works/arrow-right.png';
import arrow2 from '../../assets/how-it-works/arrow2.png';
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

    window.addEventListener('load', () => {
        window.scrollTo(0, 0);
    });

    return (
        <PageLayout>
            <div className="w-full h-full">
                <div className="bg-how-mobile bg-cover bg-no-repeat text-white h-48 flex flex-col items-center justify-center md:bg-how-desktop">
                    <div className="flex flex-col items-center gap-1">
                        <h1 className="font-HauoraBold text-2xl tracking-wide lg:text-4xl">
                            How it works
                        </h1>
                        <p className="tracking-widest lg:text-xl">Investing in 3 Easy Steps!</p>
                    </div>
                </div>

                {/* SMALLER SCREEN */}
                <div className="p-10 flex flex-col gap-8 lg:hidden">
                    {process?.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col justify-center gap-10">
                                <div className="flex">
                                    <p className="px-3 py-1 border border-black rounded-full">
                                        {item?.id}
                                    </p>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <img src={item?.image} className="w-64 sm:w-1/2 lg:w-64" />
                                    <h1 className="font-HauoraBold text-sm text-center sm:text-xl">
                                        {item?.headingText}
                                    </h1>
                                    <p className="text-sm text-center sm:text-lg">
                                        {item?.subText}
                                    </p>
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
                            <p className="font-HauoraBold">Get Started</p>
                            <img src={arrowRight} />
                        </Link>
                    </div>
                </div>

                {/* LARGER SCREENS */}
                <div className="hidden lg:flex flex-row justify-between py-10 px-4 xl:p-8">
                    <div className="relative w-210">
                        <div className="flex mb-12">
                            <p className="px-3.5 py-1 border border-black rounded-full text-lg font-HauoraBold">
                                1
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src={signUpImg} width={'250px'} className="mb-5" />
                            <h1 className="text-xl font-Hauora">Sign up for your free account</h1>
                            <p className="font-Hauora text-sm text-center">
                                Open a premium account for full functionality
                            </p>
                            <Link to={'/about'} className="font-Hauora text-green-500 text-sm">
                                Learn more
                            </Link>
                        </div>
                        <img
                            src={arrow2}
                            className="absolute bottom-36 lg:left-56 lg:z-10 lg:h-24 xl:h-28 xl:left-64"
                        />
                    </div>
                    <div className="relative w-210">
                        <div className="flex mb-12">
                            <p className="px-3 py-1 border border-black rounded-full text-lg font-HauoraBold">
                                2
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src={setUpImg} width={'250px'} className="mb-5" />
                            <h1 className="text-xl font-Hauora">Set up your account</h1>
                            <p className="font-Hauora text-sm text-center">
                                Create your profile and answer our short quiz on your risk appetite.
                            </p>
                            {/* <Link className="font-Hauora text-green-500 text-sm">Learn more</Link> */}
                        </div>
                        <img
                            src={arrow2}
                            className="absolute bottom-36 lg:left-56 lg:z-10 h-24 xl:h-28 xl:left-64"
                        />
                    </div>
                    <div className="relative w-210">
                        <div className="flex mb-12">
                            <p className="px-3 py-1 border border-black rounded-full text-lg font-HauoraBold">
                                3
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img src={getImg} width={'250px'} className="mb-5" />
                            <h1 className="text-xl font-Hauora text-center">
                                Get your custom-made recommendations
                            </h1>
                            <p className="font-Hauora text-sm text-center">
                                From the short quiz, we understand your interests and curate stock
                                options that are tailored to you.
                            </p>
                            {/* <Link className="font-Hauora text-green-500 text-sm">Learn more</Link> */}
                        </div>
                        {/* <img src={arrow2} className="absolute top-40 left-52" height={'40px'} /> */}
                    </div>
                </div>

                <div className="hidden lg:flex justify-center mt-6 mb-10">
                    <Link
                        to={'/signup'}
                        className="text-sm flex items-center gap-2 bg-green-400 py-3 px-20 rounded-md hover:bg-green-500 transition ease-in-out delay-100">
                        <p className="font-HauoraBold">Get Started</p>
                        <img src={arrowRight} />
                    </Link>
                </div>
            </div>
        </PageLayout>
    );
};

export default Index;
