import React from "react";

const links = [
  { href: "https://snapp.ir/about/", label: "درباره ما" },
  { href: "https://snapp.ir/contact/", label: "تماس با ما" },
  { href: "https://snapp.ir/blog/", label: "بلاگ" },
  {
    href: "https://digitalsignup.snapp.ir/?utm_source=snapp.ir",
    label: "ثبت‌نام راننده",
  },
];

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b px-[5%] flex justify-start items-center h-[96px]">
      <a href="https://snapp.ir/">
        <img
          src="/snappTextLogo.svg"
          alt="Snapp logo"
          className="w-24 ml-[21px]"
        />
      </a>
      <nav className="hidden md:flex gap-6 text-[#404040] text-[16px]">
        {links.map(({ href, label }) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
