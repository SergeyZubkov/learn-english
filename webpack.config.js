const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const browserCfg = {
	entry: './src/browser/index.js',
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.(svg|png|jpg|gif)/,
				loader: 'file-loader',
				options: {
					name: 'public/media/[name].[ext]',
					publicPath: name => name.replace('public', '')
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {importLoaders: 1}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: [autoprefixer()]
							}
						}
					]
				})
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react-app']
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "public/css/[name].css"
		})
	]
}

const serverCfg = {
	entry: './src/server/index.js',
	output: {
		path: __dirname,
		filename: 'server.js'
	},
	target: 'node',
	externals: [nodeExternals()],
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
						{
				test: /\.(svg|png|jpg|gif)/,
				loader: 'file-loader',
				options: {
					name: 'public/media/[name].[ext]',
					publicPath: name => name.replace('public', ''),
					emitFile: false
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "css-loader/locals"
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react-app']
					}
				}
			}
		]
	},
	plugins: [
		new NodemonPlugin()
	]
}


module.exports = [browserCfg, serverCfg];