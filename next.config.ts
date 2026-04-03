import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "truckora.vercel.app",
          },
        ],
        destination: "https://www.truckora.gentabahana.web.id/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
