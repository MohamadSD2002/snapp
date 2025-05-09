import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center py-[40px] px-[5%] min-h-[100px]">
      <nav className="flex flex-wrap justify-center pr-4 max-w-[1000px] text-[#404040]">
        <a
          href="https://career.snapp.ir?utm_source=snapp.ir&utm_medium=website-button&utm_campaign=menu"
          className="ml-4 my-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          فرصت‌های شغلی
        </a>
        <a
          href="https://snapp.ir/blog/"
          className="ml-4 my-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          بلاگ
        </a>
        <a href="/terms/" className="ml-4 my-2">
          شرایط و قوانین
        </a>
        <a
          href="https://business.snapp.ir/"
          className="ml-4 my-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          پنل سازمانی
        </a>
        <a href="/faq/" className="ml-4 my-2">
          سوالات متداول
        </a>
        <a
          href="https://club.snapp.ir/?utm_source=snapp.ir&utm_medium=website-button&utm_campaign=menu"
          className="ml-4 my-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          باشگاه رانندگان
        </a>
        <a
          href="https://digitalsignup.snapp.ir/?utm_source=snapp.ir&utm_medium=website-button&utm_campaign=menu"
          className="ml-4 my-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          ثبت نام راننده اسنپ
        </a>
        <a href="/about/" className="ml-4 my-2">
          درباره ما
        </a>
        <a href="/contact/" className="ml-4 my-2">
          تماس با ما
        </a>
      </nav>

      <div className="flex flex-col justify-center flex-wrap">
        {/* Social Icons */}
        <div className="flex items-center justify-center mt-4 mb-4">
          <a
            href="https://twitter.com/snapp_team"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M25.6 12.5c0 8.4-4.8 14.4-13.2 14.4-4.8 0-6.7-2.5-8.4-4.8m0 0l3.6-1.2c-4-4-4.3-10-1.2-14.4 1.5 2.7 4.2 5.2 7.2 6 .1-3.5 2.5-6 6-6 2.4 0 3.8.9 4.8 2.4H28l-2.4 3.6"
                ></path>
                <path d="M0 32V0h32v32z"></path>
              </g>
            </svg>
          </a>
          <a
            href="https://instagram.com/snapp_team"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M10 4h12a6 6 0 016 6v12a6 6 0 01-6 6H10a6 6 0 01-6-6V10a6 6 0 016-6h0z"
                ></path>
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M22.6 9c-.2 0-.5.2-.5.4a.5.5 0 10.5-.4M19.4 12.6a4.8 4.8 0 11-6.8 6.8 4.8 4.8 0 016.8-6.8"
                ></path>
                <path d="M0 32V0h32v32z"></path>
              </g>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/c/Snapp_team"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M15.7 22.5L13 25.2a.9.9 0 01-1.5-.4l-1.8-6"></path>
                  <path d="M18.8 14.6l-5.2 4.7c-.5.5-.5 1.3 0 1.7l7.2 5.3c.7.5 1.8.2 2-.7L26.2 9a1 1 0 00-1.4-1.2l-20.7 8a.7.7 0 000 1.3l5.5 1.7"></path>
                </g>
                <path d="M0 32V0h32v32z"></path>
              </g>
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/snapp.ir"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M10 4h12a6 6 0 016 6v12a6 6 0 01-6 6H10a6 6 0 01-6-6V10a6 6 0 016-6h0zM10.8 14.8V22"
                ></path>
                <g
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M15.6 22v-4.2a3 3 0 013-3h0a3 3 0 013 3V22M10.8 10.5c-.1 0-.3 0-.3.3a.3.3 0 10.3-.3"></path>
                </g>
                <path d="M0 32V0h32v32z"></path>
              </g>
            </svg>
          </a>
          <a
            href="tg://resolve?domain=snappofficial"
            aria-label="Telegram"
            className="px-1"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <g
                  stroke="#323232"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M15.7 22.5L13 25.2a.9.9 0 01-1.5-.4l-1.8-6"></path>
                  <path d="M18.8 14.6l-5.2 4.7c-.5.5-.5 1.3 0 1.7l7.2 5.3c.7.5 1.8.2 2-.7L26.2 9a1 1 0 00-1.4-1.2l-20.7 8a.7.7 0 000 1.3l5.5 1.7"></path>
                </g>
                <path d="M0 32V0h32v32z"></path>
              </g>
            </svg>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center items-center flex-wrap px-2">
          <a
            href="https://trustseal.enamad.ir/?id=30599&Code=uGobIf7GE1XUArlbdKa3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://ecunion.ir/bundles/pouyasoft/home/img/namad.png"
              width="130"
              height="130"
              alt="enamad"
              className="cursor-pointer"
            />
          </a>
          <img
            src="https://ecunion.ir/bundles/pouyasoft/home/img/namad.png"
            width="130"
            height="130"
            alt="samandehi"
            className="my-2 cursor-pointer"
          />
          <img
            src="https://ecunion.ir/bundles/pouyasoft/home/img/namad.png"
            width="130"
            height="130"
            alt="ecunion"
            className="my-2 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
