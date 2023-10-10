/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    }
}

module.exports = nextConfig
