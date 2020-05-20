const { rollup } = require('./gulp-rollup-babel');
const { bootstrapConfig } = require('../config/rollup.bootstrap.config');

const buildBootstrapJs = () => {
  return rollup(bootstrapConfig);
};

exports.buildBootstrapJs = buildBootstrapJs;
