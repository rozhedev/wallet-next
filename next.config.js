/** @type {import('next').NextConfig} */

const path = require("path");

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
                pathname: "**",
            },
        ],
    },
    distDir: "build",
};

module.exports = nextConfig;
