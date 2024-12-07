/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',     // Enable static export
  distDir: 'out',       // Set the output directory
  images: {
    unoptimized: true,  // Disable image optimization
  },
};

export default nextConfig;
