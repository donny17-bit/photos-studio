/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    VIDEO: process.env.VIDEO,
    WHATSAPP: process.env.WHATSAPP,
    BANNER: process.env.BANNER,
    FAMILY: process.env.FAMILY,
    WEDDING: process.env.WEDDING,
    PREWEDDING: process.env.PREWEDDING,
    ENGAGEMENT: process.env.ENGAGEMENT,
    NEW_BORN: process.env.NEW_BORN,
    GRADUATION: process.env.GRADUATION,
    GROUP: process.env.GROUP,
    THUMBNAIL_FAMILY: process.env.THUMBNAIL_FAMILY,
    THUMBNAIL_WEDDING: process.env.THUMBNAIL_WEDDING,
    THUMBNAIL_PREWEDDING: process.env.THUMBNAIL_PREWEDDING,
    THUMBNAIL_ENGAGEMENT: process.env.THUMBNAIL_ENGAGEMENT,
    THUMBNAIL_NEW_BORN: process.env.THUMBNAIL_NEW_BORN,
    THUMBNAIL_GRADUATION: process.env.THUMBNAIL_GRADUATION,
    THUMBNAIL_GROUP: process.env.THUMBNAIL_GROUP,
  },
};

module.exports = nextConfig;
