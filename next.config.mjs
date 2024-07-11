/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["images.pexels.com"] // or
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com"
      }
    ]
  }
};

export default nextConfig;
