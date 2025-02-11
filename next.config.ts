const isProd = process.env.NODE_ENV === 'production';
const repoName = 'MPPS'; // Change this to your GitHub repo name

module.exports = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};
