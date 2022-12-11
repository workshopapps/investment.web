/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutCard from "./aboutCard";
// import img1 from "../../assets/about/team-1.png";
// import img2 from "../../assets/about/team-2.png";
// import img3 from "../../assets/about/team-3.png";
// import Divine from "../../assets/about/divine.png";
// import Imran from "../../assets/about/imran.png";
// import Ayobami from "../../assets/about/ayobami.png";
// import Chika from "../../assets/about/chika.png";
// import Ayomide from "../../assets/about/Ayomide.png";
// import Stephen from "../../assets/about/stephen.png";
// import Rose from "../../assets/about/Rose.png";
// import Gbenga from "../../assets/about/Gbenga.png";

const OurTeam = (props) => {
  return (
    <div
      id="team"
      data-testid="the-team"
      className="bg-[#FFFFFF] w[385px] p-5 md:pl-[50px] md:pr-[50px] lg:pl-[100px] lg:pr-[100px]"
    >
      <h1 className="font-normal md:font-semibold text-center mb-8 pt-0 md:pt-12 text-2xl md:text-4xl">
        Meet The Team
      </h1>
      <div className="flex gap-2 p-6">
        <p>All Teams</p>
        <p>Management team</p>
        <p>Design</p>
        <p>Engineering</p>
        <p>Marketing</p>
      </div>
      <div className="flex flex-col w-full p-10  mx-auto md:flex-row justify-center gap-8 md:justify-around m-10 md:-20">

        <div className="">
          <img
            className="w-full md:w-[15vw] h-[15vh] md:h-[25vh] rounded-t-lg"
            src={props.img}
            alt="team member"
          />
          <div className="md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
            <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">
             {props.name}
            </p>
            <p className="text-xs">{props.role}</p>
          </div>
        </div>


        {/* <div className="">
          <img
            className="w-full md:w-[15vw] h-[15vh] md:h-[25vh] rounded-t-lg"
            src={Imran.src}
            alt="team member"
          />
          <div className=" md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
            <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">
              Imran Abdulmalik
            </p>
            <p className="text-xs">CTO/Engineering lead</p>
          </div>
        </div>
        <div className="">
          <img
            className="w-full md:w-[15vw] h-[15vh] md:h-[25vh] rounded-t-lg"
            src={Ayobami.src}
            alt="team member"
          />
          <div className="md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
            <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">
              Ayobami Israel
            </p>
            <p className="text-xs">DesignLead</p>
          </div>
        </div>
        <div className="">
          <img
            className="w-full md:w-[15vw] h-[15vh] md:h-[25vh] rounded-t-lg"
            src={Chika.src}
            alt="team member"
          />
          <div className="md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
            <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">
              Precious Chika-Ugada
            </p>
            <p className="text-xs">Marketing Lead</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-10  mx-auto md:flex-row justify-center gap-8 md:justify-around m-10 md:-20">
        <div className="">
          <img
            className="w-full md:w-[15vw] h-[15vh] md:h-[25vh] rounded-t-lg"
            src={Ayomide.src}
            alt="team member"
          />
          <div className="md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
            <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">
              Ayomide Opeyemi Adeshina
            </p>
            <p className="text-xs">DevOps</p>
          </div>
        </div>

        <div className="">
          <img
            className="w-full md:w-[15vw] h-[15vh] md:h-[25vh] rounded-t-lg"
            src={Stephen.src}
            alt="team member"
          />
          <div className=" md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
            <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">
              Steven Okosieme
            </p>
            <p className="text-xs">Product Manager</p>
          </div>
        </div>
        <div className="">
          <img
            className="w-full md:w-[15vw] h-[15vh] md:h-[25vh] rounded-t-lg"
            src={Rose.src}
            alt="team member"
          />
          <div className="md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
            <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">
              Rosemary Okoye
            </p>
            <p className="text-xs">Design Sub-Lead</p>
          </div>
        </div>
        <div className="">
          <img
            className="w-full md:w-[15vw] h-[15vh] md:h-[25vh] rounded-t-lg"
            src={Gbenga.src}
            alt="team member"
          />
          <div className="md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
            <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">
              Abdulrasheed Oluwagbenga Shuaib
            </p>
            <p className="text-xs">Design Team</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-10  mx-auto md:flex-row justify-center gap-8 md:justify-around m-10 md:-20">
        <div className="">
          <img
            className="w-full md:w-[15vw] h-[15vh] md:h-[25vh] rounded-t-lg"
            src={Ayomide.src}
            alt="team member"
          />
          <div className="md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
            <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">
              Ayomide Opeyemi Adeshina
            </p>
            <p className="text-xs">DevOps</p>
          </div>
        </div>

        <div className="">
          <img
            className="w-full md:w-[15vw] h-[15vh] md:h-[25vh] rounded-t-lg"
            src={Stephen.src}
            alt="team member"
          />
          <div className=" md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
            <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">
              Steven Okosieme
            </p>
            <p className="text-xs">Product Manager</p>
          </div>
        </div>
        <div className="">
          <img
            className="w-full md:w-[15vw] h-[15vh] md:h-[25vh] rounded-t-lg"
            src={Rose.src}
            alt="team member"
          />
          <div className="md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
            <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">
              Rosemary Okoye
            </p>
            <p className="text-xs">Design Sub-Lead</p>
          </div>
        </div>
        <div className="">
          <img
            className="w-full md:w-[15vw] h-[15vh] md:h-[25vh] rounded-t-lg"
            src={Gbenga.src}
            alt="team member"
          />
          <div className="md:bg-[#ECECEC] text-center p-4 rounded-b-lg bg-[#E8FBF2]">
            <p className="font-semibold md:text-[#455A64] text-[#1BD47B]">
              Abdulrasheed Oluwagbenga Shuaib
            </p>
            <p className="text-xs">Design Team</p>
          </div>
        </div>*/}
      </div> 
    </div>
  );
};

export default OurTeam;
