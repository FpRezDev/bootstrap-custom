
const bootstrapSassConfig = {
  inputFileName: "./src/scss/bootstrap-custom.scss",
  outputDir: "./dist/css/",
  sourcemap: true
};

const bootstrapRollupConfig = {
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
exports.bootstrapRollupConfig = bootstrapRollupConfig;
exports.bootstrapSassConfig = bootstrapSassConfig;