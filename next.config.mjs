/** @type {import('next').NextConfig} */
import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false,
});

const nextConfig = withPWA({
  experimental: {
    appDir: true,
  },
});

export default nextConfig;
