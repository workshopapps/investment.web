/* eslint-disable prettier/prettier */
import React from 'react';
import img1 from './../../assets/about/ayobami.jpeg';
import img2 from './../../assets/about/Divine.jpg';
import img3 from './../../assets/about/Imran.jpg';

const OurTeam = () => {
    const teams = [
        {
            img: img1,
            name: 'Ayobami Isreal',
            role: 'Product Designer'
        },
        {
            img: img2,
            name: 'Divine Uzodinma',
            role: 'Product Manager'
        },
        {
            img: img3,
            name: 'Imran Abdulmalik',
            role: 'Tech Lead'
        }
    ]
    return (
        <div
            id="team"
            data-testid="the-team"
            className="bg-[#fafaff] p-5 md:pl-[50px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px]">
            <h1 className="font-normal md:font-semibold text-center mb-8 pt-0 md:pt-12 text-2xl md:text-4xl">
                Meet Our Team
            </h1>
            <div className="flex justify-center gap-[32px] items-center flex-wrap">
                {
                    teams.map((item, index) => {
                        const {img, name, role} = item;
                        return(
                            <div key={index} style={{background: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className="h-[278px] md:h-[387px] max-w-[318px] w-full flex items-end rounded-[8px] overflow-hidden">
                                <div className="bg-[#E8FBF2] md:bg-[#ECECEC] w-full text-center pt-[20px] pb-[31px] ">
                                    <p className="font-semibold md:text-[#455A64] text-[#1BD47B] text-[16px]">{name}</p>
                                    <p className="text-[12px]">{role}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default OurTeam;
