require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

module.exports = withCSS({
	reactStrictMode: true,
	cssModules: false,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[local]___[hash:base64:5]',
	},
	...withLess(
		withSass({
			lessLoaderOptions: {
				javascriptEnabled: true,
			},
		}),
	),
});
