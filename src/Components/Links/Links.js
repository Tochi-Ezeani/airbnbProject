import React from 'react';
import GreaterThanSign from "./svgs/GreaterThanSign";
import Filters from './svgs/Filters';

const Links = () => {
  const links = [
    {
      src: "assets/images/OMG.jpg",
      heading: "OMG!"
    },
    {
      src: "assets/images/islands.jpg",
      heading: "Islands"
    },
    {
      src: "assets/images/windmills.jpg",
      heading: "Windmills"
    },
    {
      src: "assets/images/amazing-views.jpg",
      heading: "Amazing views"
    },
    {
      src: "assets/images/tropical.jpg",
      heading: "Tropical"
    },
    {
      src: "assets/images/national-parks.jpg",
      heading: "National parks"
    },
    {
      src: "assets/images/top-of-the-world.jpg",
      heading: "Top of the world"
    },
    {
      src: "assets/images/top-cities.jpg",
      heading: "Top cities"
    }
  ];

  return (
    <div className="flex px-10">

      <div className="w-[70%] h-22 flex justify-between">

        <div className="w-[12%] pt-7 pb-3 border-b-2 border-black">
          <div className="flex justify-center items-center"><img src="assets/images/amazing-pools.jpg" alt="Amazing pools" className="w-6 h-6" /></div>
          <div className="text-center"><span className="text-black text-xs font-semibold">Amazing pools</span></div>
        </div>

        {
          links.map((link) => (
            <div className="w-[12%] pt-7 pb-3">
              <div className="flex justify-center items-center"><img src={link.src} alt="Amazing pools" className="w-6 h-6" /></div>
              <div className="text-center"><span className="text-[#6A6A6A] text-xs font-semibold">{link.heading}</span></div>
            </div>
          ))
        }

      </div>

      <div className="flex justify-center items-center">
        <div className="w-7 h-7 flex justify-center items-center border-2 rounded-full">
          <GreaterThanSign />
        </div>
      </div>

      <div className="flex justify-start items-center ml-4">  
        <div className="h-[55%] flex justify-center items-center border px-4 rounded-xl">
          <div className="mr-2">
            <Filters />
          </div>
          <div>
            <span className="text-black text-xs font-semibold">Filters</span>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center ml-4">  
        <div className="h-[55%] flex justify-center items-center border px-4 rounded-xl">
          <div className="mr-2">
            <span className="text-black text-xs font-semibold">Display total before taxes</span>
          </div>
          <div className="w-[36px] bg-[#B0B0B0] px-[2px] py-[2px] rounded-full">
            <div className="w-[22px] h-[22px] bg-white rounded-full">
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Links