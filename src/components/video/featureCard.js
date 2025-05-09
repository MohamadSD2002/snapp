import React from "react";

const FeatureCard = ({ img, title, desc }) => (
  <div className="flex items-center rounded-xl bg-white w-[49%] mt-8 px-6 h-[260px]">
    <img src={img} alt={title} className="w-[120px] h-auto" loading="eager" />
    <div className="flex flex-col justify-center pr-4 flex-1 text-right">
      <p className="font-bold py-2">{title}</p>
      <p className="text-[14px]">{desc}</p>
    </div>
  </div>
);

export default FeatureCard;
