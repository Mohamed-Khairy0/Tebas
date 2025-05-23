const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: false,
    port: 9000,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
          sources: true,
        },
      },
      {
           test: /\.(sa|sc|c)ss$/i,
        exclude: /bootstrap\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
          "sass-loader"
        ],
      },

      {
        test: /bootstrap\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },

          'rtlcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "./img/[name][ext]"
        }
      },
      

    ],

     
    
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "product.html",
      template: "./src/product.html"
    }),
    new HtmlWebpackPlugin({
      filename: "checkout.html",
      template: "./src/checkout.html"
    }),
    new HtmlWebpackPlugin({
      filename: "payment.html",
      template: "./src/payment.html"
    }),
    new HtmlWebpackPlugin({
      filename: "search.html",
      template: "./src/search.html"
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),
   
    new CssMinimizerPlugin({
      exclude: /node_modules|\.css$/,
    })
  ]
};
