import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      new URL("http://localhost:1337/**"),
      new URL("https://cms-nextjs-strapi-8r1v.onrender.com/**"),
      new URL("https://strapi-admin-wsao.onrender.com/**"),
    ],
  },
};
export default nextConfig;
