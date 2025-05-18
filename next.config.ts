import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      new URL("http://localhost:1338/**"),
      new URL("https://strapi-admin-oqcp.onrender.com/**"),
      new URL("https://strapi-admin-wsao.onrender.com/**"),
    ],
  },
  env: {
    NEXT_PUBLIC_STRAPI_ADMIN: "http://localhost:1338",
    STRAPI_ADMIN: "http://localhost:1338",
    NEXT_PUBLIC_LOGROCKET_API_ID: "wcrrkn",
    NEXT_PUBLIC_LOGROCKET_PROJECT_NAME: "cms-isr",
    NEXT_PUBLIC_GA_MEASUREMENT_ID: "G-PMHXR9FWMZ",
    TAWK_PROPERTY_ID: "68051b4953438d190e0d3cc4",
    TAWK_WIDGET_ID: "1ip9v55ut",
    ONRAMPER_API_KEY: "pk_test_01JSK05KJ80WZ9VZ53DR77F5B5",
  },
};
export default nextConfig;
