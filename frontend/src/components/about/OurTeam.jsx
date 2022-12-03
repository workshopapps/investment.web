/* eslint-disable prettier/prettier */
import React from 'react';
import img1 from './../../assets/about/team-1.png';
import img2 from './../../assets/about/team-2.png';
import img3 from './../../assets/about/team-3.png';

const OurTeam = () => {
    return (
        <div
            id="team"
            data-testid="the-team"
            className="bg-[#fafaff] p-5 md:pl-[50px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px]">
            <h1 className="font-normal md:font-semibold text-center mb-8 pt-0 md:pt-12 text-2xl md:text-4xl">
                Meet Our Team
            </h1>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:justify-between m-10 md:-20">
                <div className="">
                    <img className="w-full rounded-t-lg" src={img1} alt="team member" />
                    <div className="md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
                        <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">Ayobami Isreal</p>
                        <p className="text-xs">Product Designer</p>
                    </div>
                </div>
                <div className="">
                    <img className="w-full rounded-t-lg" src={img2} alt="team member" />
                    <div className="md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
                        <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">Divine Uzodinma</p>
                        <p className="text-xs">Product manager</p>
                    </div>
                </div>
                <div className="">
                    <img className="w-full rounded-t-lg" src={img3} alt="team member" />
                    <div className=" md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
                        <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">Imran Abdulmalik</p>
                        <p className="text-xs">Tech Lead</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
