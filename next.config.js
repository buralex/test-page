/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const basePath = isDev ? undefined : "/test-page";
// const assetPrefix = isDev ? undefined : "https://buralex.github.io/test-page/";

const nextConfig = {
  basePath,
  // assetPrefix,
  output: "export",
  // exportPathMap: function () {
  //   // /Next-React-Components
  //   return {
  //     "/": { page: "/" },
  //     // "/ap-grid-layout": { page: "/ap-grid-layout" },
  //     // "/ap-highlight": { page: "/ap-highlight" },
  //   };
  // },
};

module.exports = nextConfig;
