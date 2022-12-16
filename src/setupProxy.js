const createProxyMiddleware = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api', {
      target: process.env.REACT_APP_HOST_API_KEY,
      pathRewrite: {
        '^/api': '',
      },
      changeOrigin: true,
      secure: false,
    })
  );
};
