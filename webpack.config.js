const path = require('path')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	devServer: {
		contentBase: path.resolve(__dirname, 'src'),
		inline: true,
		host: '0.0.0.0',
		port: 1296,
	},
	entry: { main: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	module: {
		rules: [
			{
		        test: /\.js$/,
		        exclude: /node_modules/
	      	},
			{
				test: /\.scss?$/,
				exclude: path.resolve(__dirname, '/node_modules/'),
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
	      filename: "style.css"
	    }),
	    new HtmlWebpackPlugin({
	      inject: false,
	      hash: true,
	      template: './src/index.html',
	      filename: 'index.html'
	    })
	]
}
