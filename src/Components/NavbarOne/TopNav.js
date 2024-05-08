import React from "react";
import AirbnbLogo from "./svgs/AirbnbLogo";
import Globe from "./svgs/Globe";
import HamburgerMenu from "./svgs/HamburgerMenu";
import Avatar from "./svgs/Avatar";

const TopNav = () => {
  return(
    <div className="flex justify-between items-center h-20">
      <AirbnbLogo />
      <div>
        <span className="text-[#222222] font-semibold text-base mr-8">Stays</span>
        <span className="text-[#6A6A6A] font-normal text-base mr-8">Experiences</span>
        <span className="text-[#6A6A6A] font-normal text-base">Online Experiences</span>
      </div>
      <div className="flex">
        <div className="flex justify-center items-center pr-6">
          <span className="text-[#222222] font-semibold text-base">Airbnb your home</span>
        </div>
        <div className="flex justify-center items-center pr-6"><Globe /></div>
        <div className="flex border px-2 py-2 rounded-3xl">
          <div className="flex justify-center items-center pl-2 pr-4"><HamburgerMenu /></div>
          <div><Avatar /></div>
        </div>
      </div>
    </div>
  );
};

export default TopNav