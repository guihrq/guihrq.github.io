/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    distDir: "dist",
    images: {
        unoptimized: true
    },
    assetPrefix: "./",
    basePath: "",
}

module.exports = nextConfig
