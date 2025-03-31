const path = require("path");

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'source-map',
  target: ['web'],
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    // library: {
    //   name: '@roche/react-components',
    //   type: 'commonjs2',
    // },
    path: path.resolve(__dirname, './dist/'),
    publicPath: '/',
  },
  devServer: {
    port: '3210',
    static: {
      directory: path.join(__dirname, 'public')
    },
    open: true,
    hot: true,
    liveReload: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
    allowedHosts: ['*'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img',
            },
          },
        ],
      },
    ]
  },
}
