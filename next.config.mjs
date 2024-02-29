/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['ibtfehfnrqovkywmypaz.supabase.co'],
  },
};

export default nextConfig;
