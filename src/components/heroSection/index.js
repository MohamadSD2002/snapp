import React from "react";

const HeroSection = () => {
  return (
    <section
      id="intro"
      className="flex flex-col md:flex-row justify-center bg-[#21aa58] text-white mt-[96px]"
    >
      <div className="bg-primary-200 flex flex-col md:w-1/2 xl:w-1/2 justify-center items-start px-8 py-8 pr-[10%]">
        <h1 className="text-white text-right text-[36px] leading-[52px] leading-13 font-bold mb-4">
          تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!
        </h1>
        <p className="text-white text-right text-xl py-4">
          از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر،
          رزرو هتل و... را میتوانید با اسنپ انجام دهید.
        </p>
        <div className="relative w-full">
          <form className="flex items-center h-20">
            <div className="w-full md:w-1/2">
              <div className="border-b border-white">
                <input
                  type="text"
                  placeholder="09xxxxx6789"
                  className="w-full py-2 text-right text-white bg-transparent border-none outline-none placeholder-gray-300"
                />
              </div>
            </div>
            <button
              type="submit"
              class="text-[14px] font-bold text-[#21aa58] bg-white border border-gray-300 rounded-md h-10 px-8 mr-4"
            >
              <span>ارسال لینک</span>
            </button>
          </form>
        </div>
        <div className="flex justify-between mt-4">
          <a
            href="https://app.snapp.taxi/?utm_source=website&utm_medium=webapp-button&utm_campaign=body"
            target="_blank"
            rel="nofollow"
            className="text-right w-full sm:w-auto"
          >
            <button className="text-[14px] font-bold bg-[#21aa58] text-white border border-white py-2 px-12 rounded-md w-full h-[48px]">
              ورود به وب اپلیکیشن اسنپ
            </button>
          </a>
        </div>
      </div>

      <div
        className="w-full md:w-1/2 h-40vh bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://web-cdn.snapp.ir/snapp-website/images/homepage/intro_desktop.jpg")',
          transform: "scaleX(-1)",
        }}
        title="تصویر پس زمینه"
      ></div>
    </section>
  );
};

export default HeroSection;
