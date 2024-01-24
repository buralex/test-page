/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === "development";
const basePath = isDevelopment ? "" : "/test-page";

const nextConfig = {
  // basePath,
  output: "export",
};

module.exports = nextConfig;
