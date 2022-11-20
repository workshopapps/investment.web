import React from 'react';
import img1 from './../../assets/about/team-1.png';
import img2 from './../../assets/about/team-2.png';
import img3 from './../../assets/about/team-3.png';

const OurTeam = () => {
    return (
        <div className="p-5 md:pl-[50px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px]">
            <h1 className="font-semibold text-center mb-8 pt-12 text-2xl md:text-4xl">
                Meet Our Team
            </h1>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:justify-between">
                <div className="">
                    <img className="w-full" src={img1} alt="team member" />
                    <div className="bg-[#ECECEC] text-center p-4">
                        <p className="font-semibold">Ayobami Isreal</p>
                        <p>Product Designer</p>
                    </div>
                </div>
                <div className="">
                    <img className="w-full" src={img2} alt="team member" />
                    <div className="bg-[#ECECEC] text-center p-4">
                        <p className="font-semibold">Divine Uzodinma</p>
                        <p>Product manager</p>
                    </div>
                </div>
                <div className="">
                    <img className="w-full" src={img3} alt="team member" />
                    <div className="bg-[#ECECEC] text-center p-4">
                        <p className="font-semibold">Imran Abdulmalik</p>
                        <p>Tech Lead</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
