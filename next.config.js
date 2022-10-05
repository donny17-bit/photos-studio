/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    WHATSAPP: process.env.WHATSAPP,
    VIDEO_CINEMATIC: process.env.VIDEO_CINEMATIC,
    FAMILY: process.env.FAMILY,
    NEW_BORN: process.env.NEW_BORN,
    WEDDING: process.env.WEDDING,
    MATERNITY: process.env.MATERNITY,
    GROUP: process.env.GROUP,
    GRADUATION: process.env.GRADUATION,
    ENGAGEMENT: process.env.ENGAGEMENT,
    PREWEDDING: process.env.PREWEDDING,
  },
};

module.exports = nextConfig;
