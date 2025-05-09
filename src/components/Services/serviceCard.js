import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <a
      href={service.href}
      rel="follow"
      className="flex items-center bg-white rounded-[18px] m-4 w-[260px] py-2 hover:text-blue-600 transition no-underline"
    >
      <img
        src={service.image}
        alt={service.title}
        width="62"
        height="62"
        loading="lazy"
        className="mx-2"
        style={{
          transform: `scale(${service.scale || 1})`,
          transformOrigin: "right bottom",
        }}
      />
      <div className="flex flex-col justify-center py-2 text-right">
        <h3 className="my-1 text-[#404040] font-semibold">{service.title}</h3>
        <p className="text-[#a3a3a3] text-sm">{service.description}</p>
      </div>
    </a>
  );
};

export default ServiceCard;
