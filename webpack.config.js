const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
}
const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.html'));

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[contenthash:3].js',
    assetModuleFilename: 'images/[name].[contenthash:3][ext]'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type:'asset/resource',
        generator: {
          filename: path.join('fonts', '[name].[contenthash:3][ext]'),
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'iсons/[name].[contenthash:3][ext]',
        },

      },
    ],
  },
  plugins: [
    // Автоматическое создание любых html страниц (Не забудьте ПЕРЕЗАПУСТИТЬ server)
    ...PAGES.map(page => new HtmlWebpackPlugin({
      inject: 'body',
      template: `${PAGES_DIR}/${page}`,

      filename: `./${page.replace(/\.html/,'.html')}`,
      // chunks:[]
    })),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
        onEnd: {
          copy: [
            {
              source: path.join('src', 'static'),
              destination: 'dist/static',
            },
          ],
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:3].css',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/static/favicon.ico',
      prefix: './static/'
    })
  ],
  devServer: {
      watchFiles: path.join(__dirname, 'src'),
      port: 9000,
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', {interlaced: true}],
              ['jpegtran', {progressive: true}],
              ['optipng', {optimizationLevel: 5}],
              ['svgo', {name: 'preset-default'}],
            ],
          },
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor:{
          name: 'vendors',
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'all',
          enforce: true
        }
      }
    },
  },
};
