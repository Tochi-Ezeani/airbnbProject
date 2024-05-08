import React from 'react'
import Privacy from './svgs/Privacy';
import Globe from '../NavbarOne/svgs/Globe';
import Facebook from './svgs/Facebook';
import Twitter from './svgs/Twitter';
import Instagram from './svgs/Instagram';

const Footer = () => {
  const listOne = [
    "Help Center",
    "AirCover",
    "Anti-discrimination",
    "Disability support",
    "Cancellation options",
    "Report neighborhood concern"
  ];

  const listTwo = [
    "Airbnb your home",
    "AirCover for Hosts",
    "Hosting resources",
    "Community forum",
    "Hosting responsibly",
    "Airbnb-friendly apartments",
    "Join a free Hosting class",
  ];

  const listThree = [
    "Newsroom",
    "New features",
    "Careers",
    "Investors",
    "Gift cards",
    "Airbnb.org emergency stays"
  ];

  return (
    <div className="bg-[#F7F7F7] px-10 pt-10">
      <div className="grid grid-cols-3 pb-10 border-b">
        <div>
          <h3 className="text-[#222222] font-semibold text-sm leading-[1.125rem]">Support</h3>
          {
            listOne.map((item) => (
              <div className="mt-2"><span className="text-[#222222] font-normal text-sm leading-[1.125rem]">{item}</span></div>
            ))
          }
        </div>

        <div>
          <h3 className="text-[#222222] font-semibold text-sm leading-[1.125rem]">Hosting</h3>
          {
            listTwo.map((item) => (
              <div className="mt-2"><span className="text-[#222222] font-normal text-sm leading-[1.125rem]">{item}</span></div>
            ))
          }
        </div>

        <div>
          <h3 className="text-[#222222] font-semibold text-sm leading-[1.125rem]">Airbnb</h3>
          {
            listThree.map((item) => (
              <div className="mt-2"><span className="text-[#222222] font-normal text-sm leading-[1.125rem]">{item}</span></div>
            ))
          }
        </div>
      </div>
      <div className="h-[68px] flex justify-between items-center">
        <div className="flex">
          <div><span className="text-[#222222] font-normal text-sm leading-[1.125rem]">© 2024 Airbnb, Inc.</span></div>
          <ul className="flex justify-center items-center">
            <li className="ml-2"><span className="text-[#222222] font-normal text-sm leading-[1.125rem]">Terms</span></li>
            <li className="ml-2"><span className="text-[#222222] font-normal text-sm leading-[1.125rem]">Sitemap</span></li>
            <li className="ml-2"><span className="text-[#222222] font-normal text-sm leading-[1.125rem]">Privacy</span></li>
            <li className="ml-2"><span className="text-[#222222] font-normal text-sm leading-[1.125rem]">Your Privacy Choices</span></li>
          </ul>
          <div className='flex justify-center items-center ml-2'><Privacy /></div>
        </div>
        <div className="flex items-center">
          <button><Globe /></button>
          <button className="ml-2"><span className="text-[#222222] font-semibold text-sm leading-[1.125rem]">English (US)</span></button>
          <button className="ml-6"><span className="text-[#222222] font-semibold text-sm leading-[1.125rem]">$ USD</span></button>
          <button className="ml-6"><Facebook /></button>
          <button className="ml-4"><Twitter /></button>
          <button className="ml-4"><Instagram /></button>
        </div>
      </div>
    </div>
  )
}

export default Footer