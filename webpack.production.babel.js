import path from "path";
import cssnext from "postcss-cssnext";
import postcssApply from "postcss-apply";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";

export default {
  entry: [
    "./src/index.css",
    "./src/index.js"
  ],
  output: {
    path: "./dist",
    filename: "snackbar.js",
    libraryTarget: "umd"
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      include: path.resolve(__dirname, "src"),
      loader: "jshint-loader"
    }],
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract([
        "css-loader",
        "postcss-loader?pack=compile"
      ].join("!"))
    }, {
      test: /\.js$/,
      include: [path.resolve(__dirname, "src")],
      loader: "babel-loader"
    }, {
      test: /package\.json$/,
      loader: "file-loader?name=[name].[ext]"
    }]
  },
  externals: (context, request, done) => {
    if (!request.startsWith("./")) return done(null, request);
    done();
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new ExtractTextPlugin("./snackbar.css")
  ],
  postcss: () => {
    return {
      compile: [
        postcssApply(),
        cssnext({
          features: {
            customProperties: false,
            autoprefixer: {
              cascade: false
            }
          }
        })
      ]
    };
  }
};
