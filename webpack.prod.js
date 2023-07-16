const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // entry: "./dist/main.js",
  mode: "production",
  entry: "./src/library.ts",
  // entry: "./src/food-app/main.ts",
  output: {
    // filename: "[contenthash]bundle.js", //cashされたbundle.jsがあると更新が反映されなかったりする
    filename: "bundle.js", //cashされたbundle.jsがあると更新が反映されなかったりする
    path: path.resolve(__dirname, "dist"), //絶対パスで書く
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/, //tsファイルがnode_modulesから取ってきたら書けないよという意味
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], //import文に拡張子がついていなければ、これをみて判断する
  },
  plugins: [new CleanWebpackPlugin()],
};
