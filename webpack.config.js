const path = require('path')

module.exports = {
  entry:{
    bundle: './src/index.ts'
  },
  // どこに出力するか
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  // inport,export時に拡張子を書くか
  resolve: {
    extensions: ['.ts', '.js']
  },
  // 開発環境のサーバー
  devServer: {
    contentBase: path.join(__dirname, 'dist'), 
    open: true
  },
  module:{
    rules: [
      {
        // 末尾が.tsの拡張子をts-loaderでコンパイルする
        loader: 'ts-loader',
        test: /\.ts$/
        // Reactの場合は test:/\.tsx$/
      }
    ]
  }
}