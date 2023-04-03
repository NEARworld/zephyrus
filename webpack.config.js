const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  devServer: {
    static: ["./public"],
    liveReload: true,
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
