/* eslint-disable @next/next/no-img-element */
import React from "react";
import {teamData} from "./teamData";

const OurTeam = (props) => {
  const [active, setActive] = React.useState("all");
  return (
    <div
      id="team"
      data-testid="the-team"
      className="w-full md:w-full mt-10 md:mt-20"
    >
      <div className="md:flex flex-col justify-center items-center font-Hauora">
        <h2 className="text-2xl text-[#455A64]  md:text-3xl text-center md:py-[14px] block font-semibold">
          Meet The Team
        </h2>
        <div className="flex gap-[3em] justify-center items-center text-center md:text-xl text-[9px] my-4 md:w-[70%] md:font-normal w-full">
          <p
            onClick={() => setActive("all")}
            className={
              active === "all"
                ? "border-b-2 border-primary102 pb-2"
                : "cursor-pointer hover:border-b-2 hover:border-primary102 pb-2"
            }
          >
            All Teams
          </p>
          <p
            onClick={() => setActive("management")}
            className={
              active === "management"
                ? "border-b-2 border-primary102 pb-2"
                : "cursor-pointer hover:border-b-2 hover:border-primary102 pb-2"
            }
          >
            Management team
          </p>
          <p
            onClick={() => setActive("design")}
            className={
              active === "design"
                ? "border-b-2 border-primary102 pb-2"
                : "cursor-pointer hover:border-b-2 hover:border-primary102 pb-2"
            }
          >
            Design
          </p>
          <p
            onClick={() => setActive("engineering")}
            className={
              active === "engineering"
                ? "border-b-2 border-primary102 pb-2"
                : "cursor-pointer hover:border-b-2 hover:border-primary102 pb-2"
            }
          >
            Engineering
          </p>
          <p
            onClick={() => setActive("marketing")}
            className={
              active === "marketing"
                ? "border-b-2 border-primary102 pb-2"
                : "cursor-pointer hover:border-b-2 hover:border-primary102 pb-2"
            }
          >
            Marketing
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-auto  md:w-[1219px] w-full py-6 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-[73px]">
        {teamData.map((team) => {
          if (active === team.type || active === "all") {
            return (
              <TeamMember
                key={team.id}
                id={team.id}
                img={team.img}
                name={team.name}
                role={team.role}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

const TeamMember = ({ id, img, name, role }) => {
  return (
    <div className="mx-auto" key={id}>
      <img
        className="w-[164px] h-[164px] md:w-[250px]  md:h-[250px]  rounded-t-lg"
        src={img}
        alt={name}
      />
      <div className="bg-[#FFFFFF] md:w-[250px]">
        <p className="font-semibold text-[11px] md:text-base md:text-[#455A64]">
          {name}
        </p>
        <p className="text-[9px] text-[#455A64] md:text-sm font-normal">
          {role}
        </p>
      </div>
    </div>
  );
};

export default OurTeam;
