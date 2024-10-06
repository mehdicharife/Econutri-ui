/** @type {import('next').NextConfig} */
const nextConfig = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "8080",
            },
        ],
    },
};

export default nextConfig;
