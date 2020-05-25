// bootsrap custom css  and/or custom scss components
// allow for easy bundling
const cssConfig = {
  inputFiles: 'src/scss/bootstrap-custom.scss',
  outputDir: 'wwwroot/css/',
  sourcemap: true,
  minimize: true,
  autoprefixer: {
    flexbox: 'no-2009'
  },
  sass: {
    outputStyle: 'expanded'
  }
};
 
// bootstrap custom js file and/or custom plugins
// allows for easy bundling
const jsConfig = {
  input: './src/js/bootstrap-custom.js',
  external: ['jquery', 'popper.js'],
  minimize: true,
  output: {
    file: './wwwroot/js/bootstrap-custom.min.js',
    name: 'index',
    format: 'umd',
    sourcemap: true,
    globals: { 
      jquery: 'jQuery', // Ensure we use jQuery which is always available even in noConflict mode
      'popper.js': 'Popper'
    }
  }
};
 
// libs dependencies
// currently only adding .min and .min.map
const libsConfig = [
  {
    outputDirectory: 'wwwroot/libs/jquery/',
    inputFiles: 'node_modules/jquery/dist/jquery.slim.min.*'
  },
  {
    outputDirectory: 'wwwroot/libs/popper.js/',
    inputFiles: 'node_modules/popper.js/dist/umd/popper.min.*'
  }
];

exports.cssConfig = cssConfig;
exports.jsConfig = jsConfig;
exports.libsConfig = libsConfig;