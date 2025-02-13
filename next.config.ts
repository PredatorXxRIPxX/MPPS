const isProd = process.env.NODE_ENV === 'production';
const repoName = 'MPPS'; 

module.exports = {
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};
