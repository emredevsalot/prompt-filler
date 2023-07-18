/** @type {import('next').NextConfig} */
const prodConfig = {
  output: "export",
  // Add basePath
  basePath: "/prompt-filler",
};

const devConfig = {};

module.exports = process.env.NODE_ENV === "production" ? prodConfig : devConfig;
