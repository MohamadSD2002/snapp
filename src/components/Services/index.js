import React from "react";
import ServiceCard from "./serviceCard";

const services = [
  {
    href: "/taxi-ride/",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/ventures/taxi.svg",
    title: "تاکسی اینترنتی",
    description: "درخواست آنلاین خودرو",
  },
  {
    href: "/online-food-delivery/",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/ventures/food.svg",
    title: "سفارش آنلاین غذا",
    description: "سفارش غذا، نان و شیرینی",
  },
  {
    href: "https://grocery.snapp.ir/",
    image: "https://jek.snapp.ir/icons/market/Market-Orange-Final.png",
    title: "سوپرمارکت آنلاین",
    description: "تهیه اقلام روزانه با اسنپ",
  },
  {
    href: "/bike-delivery/",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/ventures/bike.svg",
    title: "پیک موتوری",
    description: "حمل و نقل انواع بسته",
  },
  {
    href: "/pickup-truck/",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/ventures/pickup.svg",
    title: "درخواست وانت",
    description: "حمل و نقل انواع بار",
  },
  {
    href: "/snapp-credit/",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/ventures/Credit.svg",
    title: "سرویس اعتباری",
    description: "خرید قسطی با اسنپ",
  },
  {
    href: "/flights-ticket/",
    image: "https://web-cdn.snapp.ir/snappir-marketing/app/fdom-t.png",
    scale: 1.16,
    title: "خرید بلیط هواپیما",
    description: "خرید بلیط پرواز داخلی",
  },
  {
    href: "/international-flight/",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/ventures/intflight.svg",
    title: "بلیط هواپیما خارجی",
    description: "خرید بلیط پرواز خارجی",
  },
  {
    href: "/hotels/",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/ventures/hotel.svg",
    title: "رزرو هتل",
    description: "رزرو آنلاین هتل",
  },
  {
    href: "/bus-ticket/",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/ventures/bus.svg",
    title: "بلیط اتوبوس",
    description: "گردشگری با اسنپ",
  },
  {
    href: "/train-ticket/",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/ventures/train.svg",
    title: "بلیط قطار",
    description: "گردشگری با اسنپ",
  },
  {
    href: "/shop/",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/ventures/shop.svg",
    title: "فروشگاه",
    description: "فروشگاه اسنپ",
  },
  {
    href: "https://snapp.doctor/consultation/?utm_source=landing&utm_medium=request-button&utm_campaign=snappdoctor",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/ventures/doctor.svg",
    title: "پزشک و مشاور",
    description: "درمان با اسنپ",
  },
  {
    href: "https://snapp.doctor/store/?utm_source=landing&utm_medium=landing-button&utm_campaign=pharmacy",
    image: "https://web-cdn.snapp.ir/snappir-marketing/images/ventures/pharmacy.svg",
    title: "داروخانه",
    description: "خرید دارو با اسنپ",
  },
];

const Services = () => {
  return (
    <section className="flex flex-col items-center bg-[#f2f5f8] pb-10" style={{ contentVisibility: "auto", overflow: "hidden" }}>
      <h2 className="py-10 text-center text-3xl font-bold text-[#404040]">
        یک اپلیکیشن، برای تمام نیازها
      </h2>
      <div className="flex flex-wrap justify-center">
        {services.map((service) => (
          <ServiceCard key={service.href} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
