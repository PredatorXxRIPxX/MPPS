const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: '/MPPS', // Replace with your GitHub repo name
  assetPrefix: '/MPPS/', // Ensure assets are loaded correctly
};

module.exports = nextConfig;
