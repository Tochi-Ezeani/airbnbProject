import React from 'react';

const Image = () => {
  return (
    <div>
      <div>
        <img src="assets/images/airbnb-grid-pic.jpg" alt="airbnb grid pic" className="rounded-xl h-[284px]" />
      </div>
      <div className="flex justify-between mt-2">
        <div><span className="text-[#222222] font-semibold text-[0.9375rem]">Lekki, Nigeria</span></div>
        <div><span></span></div>
      </div>
      <div>
        <span className="text-[#6A6A6A] text-[0.9375rem]">13 kilometers away</span>
      </div>
      <div>
        <span className="text-[#6A6A6A] text-[0.9375rem]">May 1 - 6</span>
      </div>
      <div>
        <span className="text-[#222222] font-semibold text-[0.9375rem] leading-[1.1875rem]">$339 </span><span>night</span>
      </div>
    </div>
  );
};

export default Image