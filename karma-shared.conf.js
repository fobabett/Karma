module.exports = function() {
  return {
    // basePath: '../',
    frameworks: ['browserify', 'mocha', 'chai'],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-browserify',
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-coverage'
    ],
    reporters: ['coverage', 'progress'],
    browsers: ['PhantomJS'],
    autoWatch: true,
    browserify: {
      watch: true,
      debug: true
    },
    preprocessors: {
      'test/controllerSpec.js': ['coverage', 'browserify']
    },
    exclude: ['karma.conf'],

    // these are default values anyway
    singleRun: false,
    colors: true,
    
    files : [
      //3rd Party Code
      // 'bower_components/angular/angular.js',
      // 'bower_components/angular-mocks/angular-mocks.js',
      // 'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'build/bundle.js',
      //App-specific Code
      // 'src/modules/app/foo/*.js',
      // 'src/modules/common/services/*.js',
      // 'src/modules/index.js',

      //Test-Specific Code
      'node_modules/chai/chai.js',
      'test/lib/chai-should.js',
      'test/lib/chai-expect.js'
    ]
  }
};