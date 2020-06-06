

const path = require('path')

module.exports = {
    entry: __dirname + '/src/index.js',
    module: {
        rules: [
        {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            }, 
        }]
      },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
}