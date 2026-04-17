/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // disabled so useEffect runs once (prototype JS is imperative)
  output: 'export',       // static export — works on Vercel, Netlify, or any CDN
}

module.exports = nextConfig
