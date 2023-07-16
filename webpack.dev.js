const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/react.tsx",
  output: {
    // filename: "[contenthash]bundle.js", //cashされたbundle.jsがあると更新が反映されなかったりする
    filename: "bundle.js", //cashされたbundle.jsがあると更新が反映されなかったりする
    path: path.resolve(__dirname, "dist"), //絶対パスで書く
    publicPath: "/dist/", //npm run startを直接起動した場合、bundle.jsがdistの中に作られる
  },
  devtool: "inline-source-map", //
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/, //tsファイルがnode_modulesから取ってきたら書けないよという意味
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], //import文に拡張子がついていなければ、これをみて判断する
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
};
