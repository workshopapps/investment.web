import React from 'react';
import { Link } from 'react-router-dom';
import Frame2 from '../../../assets/careers/frame2.png';
import Button from '../../../components/careers/Buttons/Button';

export default function Section4() {
    return (
        <div className="block p-6 lg:flex md:flex sm:flex content-center justify-center bg-shade500 my-4 ">
            <div className="ml-6 flex justify-center content-center flex-col">
                <ul className="flex content-center text-primaryGray gap-6  text-bold list-disc px-4 py-2 ">
                    <li>Belong</li>
                    <li>Be Included</li>
                    <li>Be Valued</li>
                </ul>
                <p className="text-primaryGray text-left py-2 w-3/4 leading-7 text-base">
                    “Working with YieldVest has been an amazing experience. We adopt a workplace
                    culture where everyone is allowed to be as expressive of their creativity as
                    possible. We make magic out of the simplest of ideas.”
                </p>
                <Link to="/position">
                    <Button title="View Positions" />
                </Link>
            </div>
            <div className="md:w-4/5 w-full ml-4 my-4">
                <img src={Frame2} alt="frame 2" className="md:ml-20" />
                <div className="bg-[#0F7544] py-2 w-3/4 ml-4">
                    <p className="text-white py-1 text-sm text-bold text-center">
                        Rosemary Okemute
                    </p>
                    <p className="text-white text-xs text-center">Product Designer</p>
                </div>
            </div>
        </div>
    );
}
