const { buildBootstrapJs, buildBootstrapCss, buildBootstrap } = require("./build/bootstrap");
const del = require('del');
exports.build = buildBootstrap;
exports.buildCss = buildBootstrapCss;
exports.buildJs = buildBootstrapJs;
exports.cleanDist = function() {
  return del('./dist');
}
