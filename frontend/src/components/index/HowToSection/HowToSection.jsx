import React from 'react';
import CardItem from './Card/CardItem';

import Icon1 from '../../../assets/index/icons/icon1.svg';
import Icon2 from '../../../assets/index/icons/icon2.svg';
import Icon3 from '../../../assets/index/icons/icon3.svg';

const HowToSection = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col text-center justify-center my-10 lg:mx-[100px] mx-[16px]">
                <span className="text-[#8A8D95] tracking-[0.25px] md:mt-0 mt-10 font-semibold font-HauoraLight">
                    Doing your stock analysis shouldn&apos;t be so hard
                </span>

                <span className="text-[#000718] text-2xl tracking-[0.25px] py-4 font-light font-HauoraLight">
                    How It Works
                </span>

                <span className="text-[#545964] lg:text-lg md:mx-[20%] mx-[10%] text-center text-sm tracking-[0.25px] font-semibold my-4 font-Hauora">
                    Your stock analysis shouldnt be so difficult, with this few simple steps, you
                    can finally control your financial future like a PRO cos thats how stars Do!
                </span>

                <div className="w-full flex md:flex-row flex-col gap-0">
                    <CardItem
                        title="Register/Sign up"
                        subTitle="Register/Sign up with Mystocks to get started."
                        icon={Icon1}
                    />
                    <CardItem
                        title="Analyse"
                        subTitle="Look out for your favorite stocks with key metrics"
                        icon={Icon2}
                    />
                    <CardItem
                        title="Decide"
                        subTitle="Now its up to you to make that decision. Buy or Hodl, you win!"
                        icon={Icon3}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default HowToSection;
