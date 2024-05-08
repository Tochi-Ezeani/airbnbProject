import React from 'react'
import ShowMore from './svgs/ShowMore';

const headers = [
  "Arts & culture",
  "Outdoors",
  "Mountains",
  "Beach",
  "Unique stays",
  "Categories",
  "Things to do",
  "Travel tips & inspiration",
  "Airbnb-friendly apartments"
]; 

const locations = [
  {
    header: "Canmore",
    subHeader: "Vacation rentals"
  },
  {
    header: "Benalmádena",
    subHeader: "Beach house rentals"
  },
  {
    header: "Marbella",
    subHeader: "House rentals"
  },
  {
    header: "Mijas",
    subHeader: "Vacation rentals"
  },
  {
    header: "Prescott",
    subHeader: "Cabin rentals"
  },
  {
    header: "Scottsdale",
    subHeader: "Pet-friendly rentals"
  },
  {
    header: "Tucson",
    subHeader: "Vacation rentals"
  },
  {
    header: "Jasper",
    subHeader: "Cabin rentals"
  },
  {
    header: "Mountain View",
    subHeader: "Cabin rentals"
  },
  {
    header: "Devonport",
    subHeader: "Vacation rentals"
  },
  {
    header: "Mallacoota",
    subHeader: "Pet-friendly rentals"
  },
  {
    header: "Ibiza",
    subHeader: "Apartment rentals"
  },
  {
    header: "Anaheim",
    subHeader: "Family-friendly rentals"
  },
  {
    header: "Monterey",
    subHeader: "Condo rentals"
  },
  {
    header: "Paso Robles",
    subHeader: "House rentals"
  },
  {
    header: "Santa Barbara",
    subHeader: "Apartment rentals"
  },
  {
    header: "Sonoma",
    subHeader: "Beach house rentals"
  }
];

const BottomLinks = () => {
  return (
    <div className="bg-[#F7F7F7] px-10 py-10 border-b">

      <h2 className="text-[#222222] font-semibold text-[1.375rem] leading-[1.625rem]">Inspiration for future getaways</h2>

      <div className="mt-3 border-b">
        <button className="text-[#222222] font-semibold text-sm leading-[1.125rem] border-b-2 border-black pb-3">Popular</button>
        {
          headers.map((header) => (
            <button className="text-[#6A6A6A] font-semibold text-sm leading-[1.125rem] ml-7 pb-3">{header}</button>
          ))
        }
      </div>

      <div className="grid grid-cols-6 gap-y-4 mt-7">
        {
          locations.map((location) => (
            <div>
              <div><span className="text-[#222222] font-semibold text-[0.875] leading-[1.125rem]">{location.header}</span></div>
              <div><span className="text-[#6A6A6A] text-[0.875rem] leading-[1.125rem] m-0">{location.subHeader}</span></div>
            </div>
          )) 
        }

        <div className="flex">
          <div>
            <span className="text-[#222222] font-semibold text-[0.875] leading-[1.125rem]">Show more</span>
          </div>
          <div className="pt-[7px] ml-1">
            <ShowMore />
          </div>
        </div>
      </div>

    </div>
  )
}

export default BottomLinks
