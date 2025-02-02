/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Helps identify issues in development
    swcMinify: true, // Enables faster minification using SWC
    compiler: {
      styledComponents: true, // Support for styled-components (if used)
    },
    experimental: {
      appDir: true, // Enables the new Next.js App Router (if using Next 13+)
    },
  };
  
  export default nextConfig;
  