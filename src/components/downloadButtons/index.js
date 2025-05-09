import React from "react";

const downloadLinks = [
  {
    href: "https://redirect.appmetrica.yandex.com/serve/100056237185439217",
    src: "https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/direct-download-badge.png",
    alt: "Direct Download",
  },
  {
    href: "https://redirect.appmetrica.yandex.com/serve/1181173947656399155",
    src: "https://web-cdn.snapp.ir/snappir-marketing/app/myketmarket.png",
    alt: "Myket",
  },
  {
    href: "https://redirect.appmetrica.yandex.com/serve/1109100489301122257",
    src: "https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/app_store.svg",
    alt: "App Store",
  },
  {
    href: "https://app.snapp.taxi/pre-ride?utm_source=website&utm_medium=webapp-button",
    src: "https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/snapp-pwa.png",
    alt: "Snapp PWA",
  },
  {
    href: "https://redirect.appmetrica.yandex.com/serve/243413381082522868?campaign=CafeBazaar",
    src: "https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/bazaar.png",
    alt: "Cafe Bazaar",
  },
];

const DownloadButtons = () => {
  return (
    <section className="flex flex-wrap items-center justify-around gap-4 px-[10%] min-h-[30vh]">
      {downloadLinks.map(({ href, src, alt }) => (
        <a key={href} href={href}>
          <img src={src} alt={alt} width={160} loading="eager" />
        </a>
      ))}
    </section>
  );
};

export default DownloadButtons;
