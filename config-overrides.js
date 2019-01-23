/* config-overrides.js */
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  let newConfig = config;
  if (env === 'production') {
    newConfig = injectBabelPlugin('emotion', config);
  }
  if (env === 'development') {
    newConfig = injectBabelPlugin(['emotion', { sourceMap: true }], config);
    newConfig = injectBabelPlugin('transform-decorators-legacy', newConfig);
  }
  return newConfig;
};
