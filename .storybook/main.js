const path = require('path');

module.exports = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/preset-create-react-app',
		'@storybook/preset-scss',
	],
	webpackFinal: async (config, { configType }) => {
		// fixed less, sass and module import CSS
		config.module.rules.push({
			test: /\.less$/,
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'less-loader',
					options: {
						javascriptEnabled: true,
					},
				},
			],
			include: path.resolve(__dirname, '../app/'),
		});
		// Resolve internalization de lenguajes
		/*
		config.resolve.alias = {
			...config.resolve.alias,
			'next-i18next': 'react-i18next',
		};
		*/

		// fixed absolute import in components Next js
		config.resolve.modules = [
			...(config.resolve.modules || []),
			path.resolve(__dirname, '../app/'),
		];
		// Return the altered config
		return config;
	},
};
