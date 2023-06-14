/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["scontent-waw1-1.cdninstagram.com", "scontent-hel3-1.cdninstagram.com"]
    },
    env: {
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: "AIzaSyCRdC4FEBI3NP367AXvou7sWLKS8hE5jLk",
    }
}

module.exports = nextConfig
