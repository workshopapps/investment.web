/* eslint-disable @next/next/no-img-element */
import React from "react";
import teamData from "./teamData";

const OurTeam = (props) => {
  return (
    <div id="team" data-testid="the-team" className="w-full md:w-full mt-8">
      <div className="md:flex flex-col justify-center items-center">
        <h1 className="font-normal md:font-normal mx-auto text-center text-xl md:text-4xl">
          Meet The Team
        </h1>
        <div className="flex gap-4 justify-center items-center text-center md:text-xl text-[9px] md:w-[738px] md:font-normal w-full">
          <p>All Teams</p>
          <p>Management team</p>
          <p>Design</p>
          <p>Engineering</p>
          <p>Marketing</p>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-auto  md:w-[1219px] w-full py-6 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-[73px]">
        {teamData.map((team) => (
          <div className="mx-auto" key={team.id}>
            <img
              className="w-[164px] h-[164px] md:w-[250px]  md:h-[250px]  rounded-t-lg"
              src={team.img}
              alt={team.name}
            />
            <div className="bg-[#FFFFFF] md:w-[250px]">
              <p className="font-semibold text-[11px] md:text-base md:text-[#455A64]">
                {team.name}
              </p>
              <p className="text-[9px] text-[#455A64] md:text-sm font-normal">
                {team.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
