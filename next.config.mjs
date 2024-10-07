/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/myportfolio" : "",
  basePath: isProd ? "/myportfolio" : "",
  trailingSlash: true,
};

export default nextConfig;
