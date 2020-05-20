const { series } = require('gulp');
const { rollup } = require('./gulp-rollup-babel');
const { compile } = require('./gulp-sass-autoprefixer');
const { bootstrapRollupConfig, bootstrapSassConfig } = require('./bootstrap.config');

const buildBootstrapJs = () => {
  return rollup(bootstrapRollupConfig);
};

const buildBootstrapCss = () => {
  return compile(bootstrapSassConfig)
}

exports.buildBootstrapJs = buildBootstrapJs;
exports.buildBootstrapCss = buildBootstrapCss;
exports.buildBootstrap = series(buildBootstrapCss, buildBootstrapJs);