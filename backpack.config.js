const path = require('path');

module.exports = {
  webpack (config, options, webpack) {
    delete config.entry.main;

    if (options.env == 'development') {
      config.entry.example = [
        './dev/index.js', // Just to get use of auto reload.
      ];
    }

    config.entry.check = [
      './src/check.js',
    ];

    config.output.path = path.join(__dirname, 'dist');

    return config;
  }
}
