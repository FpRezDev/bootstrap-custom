/**
 * https://github.com/FpRezDev/gulp-rollup-babel/blob/master/rollup.bootstrap.config.js
 */
const bootstrapConfig = {
  input: './src/js/bootstrap-custom.js',
  external: ['jquery', 'popper.js'],
  output: {
    file: './dist/js/bootstrap-custom.js',
    name: 'bootstrap-custom',
    format: 'umd',
    sourcemap: true,
    globals: { 
      jquery: 'jQuery', // Ensure we use jQuery which is always available even in noConflict mode
      'popper.js': 'Popper'
    }
  }
};
exports.bootstrapConfig = bootstrapConfig;