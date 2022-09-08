const { wysiwyg, image, state, text } = require('../../utils/KSfields');
const {
	fileAdapter,
	fileAdapterGetHooks,
} = require('../../utils/s3FileAdapter');

module.exports = {
	fields: {
		title: {
			...wysiwyg,
			isRequired: true,
		},
		content: {
			...wysiwyg,
			isRequired: true,
		},
		bubble: {
			...text,
			isRequired: true,
		},
		extra: wysiwyg,
		image: image('image'),
		state,
	},
	hooks: {
		afterDelete: fileAdapterGetHooks(fileAdapter, ['image']),
	},
	labelResolver: (item) => `${item.title}`,
	adminConfig: {
		defaultColumns: 'title, content, image, state',
		defaultSort: 'createdAt',
	},
};
