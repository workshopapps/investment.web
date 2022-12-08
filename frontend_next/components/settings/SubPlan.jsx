import Link from "next/link";
import React from "react";
import Basicsub from "../../assets/settings/basicsub.svg";
import basicmobile from "../../assets/settings/mobileplan.svg";

export default function SubPlan() {
  return (
    <div className="flex justify-center items-center flex-col mt-1 mb-[140px]">
      <div className="max-w-[1024px] w-full">
        <div className="mb-6">
          <h1 className="text-4xl">Your Plan </h1>
        </div>
        <div className="flex flex-col w-full h-full mt-6">
          <picture>
            <source media="(min-width: 768px)" srcSet={Basicsub} />
            <source media="(max-width: 767px)" srcSet={basicmobile} />
            <img
              src={basicmobile.src}
              alt="basicmobile"
              className="w-full h-full mb-4"
            />
          </picture>

          <div>
            <div className="mt-3" style={{ textAlign: "right" }}>
              <Link href="/subscription">
                <button className="text-[#19C170]  font-semibold text-base py-4 px-[45px] border-[1px] border-[#1BD47B] rounded-md">
                  Upgrade Plan
                </button>
              </Link>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}
