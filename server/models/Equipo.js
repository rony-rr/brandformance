const {
	name,
	image,
	order,
	state,
	text,
} = require('../../utils/KSfields');
const {
	fileAdapter,
	fileAdapterGetHooks,
} = require('../../utils/s3FileAdapter');

module.exports = {
	fields: {
		name,
		state,
		textBurbuja: {
			...text,
		},
		thumbnail: image('thumbnail'),
		intro: {
			...text,
		},
		puesto: {
			...text,
		},
		order,
		orderMovil: {
			...order,
		},
	},
	hooks: {
		afterDelete: fileAdapterGetHooks(fileAdapter, ['thumbnail']),
	},
	labelResolver: (item) => `${item.name}`,
	adminConfig: {
		defaultColumns: 'name, thumbnail',
		defaultSort: 'order',
	},
};
