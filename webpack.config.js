module.exports = {
  mode: 'production',
  entry: ["./js/app.jsx", "./css/main.scss"],
  output: {
    path: "/home/mmainguy/git/healthymatch/public/js",
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