import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    dynamicIO: true
  }
};

export default withNextIntl(nextConfig);


