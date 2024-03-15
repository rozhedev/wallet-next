/** @type {import('next').NextConfig} */

const path = require("path");
// const loaderUtils = require('loader-utils')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
        // reactStrictMode: false,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
                port: "",
                pathname: "**/img",
            },
        ],
    },
    distDir: "build",
};

module.exports = nextConfig;
