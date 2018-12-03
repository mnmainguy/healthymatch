const path = require('path');

module.exports = {
  mode: 'development',
  entry: ["./js/app.jsx", "./css/main.scss"],
  output: {
    path: path.resolve(__dirname, "public/js"),
    publicPath: "/js",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?|\.js$/,
        exclude: /(node_modules|bower_components|neal-react)/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};