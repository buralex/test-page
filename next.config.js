// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   //   assetPrefix: "/",
//   //   basePath: "/buralex.github.io",
//   output: "export",
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/test-page" : undefined,
  output: "export",
};

module.exports = nextConfig;
