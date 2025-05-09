import React from "react";
import FeatureCard from "./featureCard";

const features = [
  {
    img: "https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income.png",
    title: "درآمد تضمینی + پاداش‌های ماهانه و هفتگی",
    desc: "با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید.",
  },
  {
    img: "https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-hour.png",
    title: "ساعت کاری دلخواه",
    desc: "فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید.",
  },
  {
    img: "https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-benefits.png",
    title: "مزایا و خدمات باشگاه رانندگان",
    desc: "در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید.",
  },
  {
    img: "https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100/carfix.png",
    title: "کار‌فیکس",
    desc: "باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است.",
  },
  {
    img: "https://web-cdn.snapp.ir/snapp-website/images/homepage/safety.svg",
    title: "امنیت سفر کاربران راننده در اسنپ",
    desc: "اسنپ با ارائه سرویس امنیت سفر در اپلیکیشن رانندگان و بهبود مستمر امکانات امنیتی این سرویس، تلاش می‌‌کند تجربه سفر با اسنپ برای کاربران راننده امن‌ و مطمئن باشد.",
  },
  {
    img: "https://web-cdn.snapp.ir/snapp-website/images/homepage/support.svg",
    title: "پشتیبانی ۲۴ ساعته و سریع",
    desc: "تیم پشتیبانی اسنپ در تمامی ساعت‌های شبانه‌روز پاسخگوی سوال‌ها و مشکلات کاربران راننده است. بخش «پشتیبانی» در اپلیکیشن رانندگان، سریع‌ترین راه ارتباطی شما با تیم پشتیبانی اسنپ است.",
  },
];

const Video = () => {
  return (
    <section className="bg-[#f2f5f8] mt-10 flex flex-col items-center justify-center py-10 px-[10%] text-center text-[#404040] content-auto">
      <h2 className="text-[36px] font-bold leading-tight">
        در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.
      </h2>
      <p className="py-6 text-xl font-medium">
        بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را اینترنتی انجام دهید
      </p>
      <a href="https://digitalsignup.snapp.ir/" aria-label="ثبت‌نام رانندگان">
        <button
          type="button"
          className="my-4 px-8 py-[11px] text-[17px] font-bold rounded-[5px] bg-[#00d170] text-white transition"
        >
          ثبت‌نام رانندگان
        </button>
      </a>

      <div className="my-10 w-full overflow-hidden">
        <video
          controls
          className="rounded-[9px] w-full"
          src="https://web-cdn.snapp.ir/snappir-marketing/images/homepage/jazbranandeh1.mp4"
          poster="https://web-cdn.snapp.ir/snappir-marketing/images/homepage/jazbcovernew.webp"
          controlsList="nodownload"
          preload="none"
        >
          <track kind="captions" />
          مزایای پیوستن به ناوگان اسنپ! مرورگر شما از ویدیو پشتیبانی نمی‌کند.
        </video>
      </div>

      <div className="flex flex-wrap justify-between w-full">
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Video;
