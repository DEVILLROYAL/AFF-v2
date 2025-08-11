import nextPWA from 'next-pwa';

const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true
});

const nextConfig = {
  reactStrictMode: true,
  // put any other Next.js settings here (images, redirects, etc.)
};

export default withPWA(nextConfig);
