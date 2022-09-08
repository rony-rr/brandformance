const { name, image, state } = require('../../utils/KSfields');
const {
	fileAdapter,
	fileAdapterGetHooks,
} = require('../../utils/s3FileAdapter');

module.exports = {
	fields: {
		name,
		image: image('image'),
		imageMobile: image('imageMobile'),
		state,
	},
	hooks: {
		afterDelete: fileAdapterGetHooks(fileAdapter, ['image', 'imageMobile']),
	},
	labelResolver: (item) => `${item.name}`,
	adminConfig: {
		defaultColumns: 'title, image, imageMobile',
		defaultSort: 'createdAt',
	},
};
