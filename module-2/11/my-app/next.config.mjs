/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  env: {
    CONTENTFUL_API_TOKEN:
      "access_token=CZMscQKzbvcyBE1-NosygIbjlk_vCMBc2jRhTkI21Gk",
    CONTENTFUL_URL:
      "https://cdn.contentful.com/spaces/k8k4q48dbeek/environments/master",
  },
};

export default nextConfig;


