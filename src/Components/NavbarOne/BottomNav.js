import React from "react";
import SearchIcon from "./svgs/SearchIcon";

const BottomNav = () => {
  return(
    <div className="h-16 flex justify-center items-center">
      <div className="w-4/6 h-full flex justify-between items-center border rounded-full shadow-md">

        <div className="flex justify-between w-1/3 pl-7">
          <div>
            <div className="text-[#222222] font-semibold text-xs mb-1">Where</div>
            <div className="text-[#6A6A6A] font-semibold text-sm leading-[1.125rem]">Search destinations</div>
          </div>
          <div className="border"></div>
        </div>

        <div className="w-1/3 flex justify-between">
          <div className="w-1/2 flex justify-between pl-6">
            <div>
              <div className="text-[#222222] font-semibold text-xs mb-1">Check in</div>
              <div className="text-[#6A6A6A] font-semibold text-sm leading-[1.125rem]">Add dates</div>
            </div>
            <div className="border"></div>
          </div>

          <div className="w-1/2 flex justify-between pl-6">
            <div>
              <div className="text-[#222222] font-semibold text-xs mb-1">Check out</div>
              <div className="text-[#6A6A6A] font-semibold text-sm leading-[1.125rem]">Add dates</div>
            </div>
            <div className="border"></div>
          </div>
        </div>

        <div className="w-1/3 flex justify-between pl-6">
          <div>
            <div className="text-[#222222] font-semibold text-xs mb-1">Who</div>
            <div className="text-[#6A6A6A] font-semibold text-sm leading-[1.125rem]">Add guests</div>
          </div>
          <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#FF385C] mr-2 text-white">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav