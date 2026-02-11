/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
