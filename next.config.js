/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === "development";
// const basePath = isDevelopment ? undefined : "/test-page";
// const basePath = isDevelopment ? undefined : "/test-page";

const nextConfig = {
  // basePath,
  assetPrefix: isDevelopment ? undefined : "/test-page",
  output: "export",
};

module.exports = nextConfig;
