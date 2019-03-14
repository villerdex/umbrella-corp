
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
    template: './index.html',
    filename: './index.html'
  });
const path = require('path');
  
module.exports = {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/, /css/],
          use: {
            loader: 'babel-loader'
          }
        },
        {
            test: /\.less|\.css$/,
            use: ['style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1
                } 
              }, 
              {loader: 'less-loader'}
            ],
        }
      ]
    },
    plugins: [htmlPlugin]
  };