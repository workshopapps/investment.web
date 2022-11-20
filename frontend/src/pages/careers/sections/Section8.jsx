import React from 'react';
import Frame8 from '../../../assets/careers/frame8.png';

export default function Section8() {
    return (
        <div className="grid grid-cols-2 bg-shade500 p-10">
            <div className="h-1/2 px-2 py-20 w-full mt-6 sm:py-8 md:py-8">
                <h1 className="text-bold text-4xl  tracking-wide leading-9 w-3/4 text-primary101">
                    Were looking for self-motivated and passionate individuals to join our expansive
                    network
                </h1>
                <p className="text-primaryGray text-left py-4  text-xs tracking-wide leading-5 mt-6 cursor-pointer">
                    Browse over 20 jobs across all categories
                </p>
            </div>
            <div className="w-full">
                <img src={Frame8} alt="frame8" className="w-full h-full object-cover rounded-lg" />
            </div>
        </div>
    );
}
