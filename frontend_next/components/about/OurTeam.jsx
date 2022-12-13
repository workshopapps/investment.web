/* eslint-disable @next/next/no-img-element */
import React from "react";
import teamData from "./teamData";

const OurTeam = (props) => {
  return (
    <div id="team" data-testid="the-team" className="w-full md:w-full mt-8">
      <div>
        <h1 className="font-normal md:font-normal  mx-auto text-center text-xl md:text-4xl">
          Meet The Team
        </h1>
        <div className="flex gap-3 text-center md:text-xl text-xs font-normal w-full justify-center">
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
              className="w-[184px] h-[184px] md:w-[250px]  md:h-[250px]  rounded-t-lg"
              src={team.img}
              alt={team.name}
            />
            <div className="bg-[#ECECEC] md:w-[250px] text-center p-2 rounded-b-lg">
              <p className="font-semibold text-[11px] md:text-[#455A64]">
                {team.name}
              </p>
              <p className="text-[9px] text-[#455A64] font-normal">
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
