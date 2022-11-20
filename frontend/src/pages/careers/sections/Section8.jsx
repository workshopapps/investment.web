import React from 'react';
import Frame8 from '../../../assets/careers/frame8.png';

export default function Section8() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 bg-shade500 p-10">
            <div className="h-1/2 px-2 py-20 w-full mt-6 sm:py-2 md:py-2">
                <h1 className="text-bold md:text-4xl text-3xl  tracking-widest leading-7 md:w-3/4 w-full text-primary101">
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
