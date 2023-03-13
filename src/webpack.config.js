const fs = require('fs-extra');

module.exports = {
  // ...
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // ...
        // Add this line:
        'FS': JSON.stringify(fs)
      }
    })
  ]
  // ...
}
