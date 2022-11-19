import React from 'react';
import Iamge1 from '../../../assets/index/laptopFrame.png';
import GooglePlay from '../../../assets/index/googleplay.png';
import AppStore from '../../../assets/index/appstore.png';
import ReviewItem from './Card/ReviewCard';

const ReviewSection = () => {
    return (
        <React.Fragment>
            <div className="flex lg:flex-row flex-col align-right justify-between pb-20 lg:mx-[100px] mx-[16px]">
                <div className="lg:w-1/2">
                    <img className="md:min-w-full" src={Iamge1} alt="latop" />
                </div>

                <div className="lg:w-1/2 flex flex-col md:text-left text-center align-center justify-items-center md:m-20 my-10 gap-4">
                    <span className="text-[#000718] md:mx-[15%] mx-0 text-3xl tracking-[0.25px] py-4 md:font-light font-semibold font-HauoraLight">
                        Download our Web Application to See more interesting features
                    </span>

                    <span className="text-[#8A8D95] md:mx-[15%] mx-0 tracking-[0.25px] md:mt-0 mb-10 font-semibold font-HauoraLight">
                        Join over our 1 million users over the globe who are using our Mystocks App
                        to control their financial future
                    </span>

                    <div className="flex flex-row md:mx-[15%] gap-6">
                        <img src={GooglePlay} alt="android" />
                        <img src={AppStore} alt="max" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-center justify-center md:my-6 lg:mx-[100px] mx-[16px]">
                <span className="text-[#000718] text-3xl tracking-[0.25px] py-4 font-light font-HauoraLight">
                    Our Reviews
                </span>

                <span className="text-[#545964] lg:text-lg text-center text-sm tracking-[0.25px] font-semibold my-4 font-Hauora">
                    We do not CAP over here. See reviews from our customers from all over the world
                </span>

                <div className="w-full flex md:flex-row flex-col gap-6 my-6">
                    <ReviewItem
                        name="Ife, Ibadan"
                        description="Their services was very timely and i loved what that they did. It was really a job nicely done. I really would come back again and use their services again!"
                    />

                    <ReviewItem
                        name="Janet, UK"
                        description="Their services was very timely and i loved what that they did. It was really a job nicely done. I really would come back again and use their services again!"
                    />

                    <ReviewItem
                        name="Irene, Greece"
                        description="Their services was very timely and i loved what that they did. It was really a job nicely done. I really would come back again and use their services again!"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default ReviewSection;
