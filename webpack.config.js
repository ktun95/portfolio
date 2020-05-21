let BUILD;

if (process.env.NODE_ENV === 'PRODUCTION') BUILD = 'production'
if (process.env.NODE_ENV === 'DEVELOPMENT') BUILD = 'development'

module.exports = {
    mode: 'development',
    entry: [
      '@babel/polyfill', // enables async-await
      './client/index.js'
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  }