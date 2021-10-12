const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
    clean: true
  },

  devServer: {
    // Location of files not handled by webpack
    static: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    compress: true,
    port: 1234,
    open: true
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        use: ['pug-plain-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '/public/images/[name].[ext]'
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '~': path.resolve(__dirname, 'src/')
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public' }]
    }),
    new Dotenv()
  ]
};
