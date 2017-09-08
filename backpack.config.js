const path = require('path');

module.exports = {
  webpack (config, options, webpack) {
    delete config.entry.main;
    config.entry.check = [
      './src/check.js',
    ];
    config.output.path = path.join(__dirname, 'dist');
    config.output.filename = 'check.js';
    config.output.sourceMapFilename = 'check.map';

    return config;
  }
}
