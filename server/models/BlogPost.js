const {
	fileAdapter,
	fileAdapterGetHooks,
} = require('../../utils/s3FileAdapter');
const {
	name,
	slug,
	excerpt,
	wysiwyg,
	state,
	seoTitle,
	seoDescription,
	seoMetakeywords,
	image,
	postCategorias,
} = require('../../utils/KSfields');

module.exports = {
	fields: {
		name,
		slug,
		state,
		category: { ...postCategorias },
		excerpt,
		content: wysiwyg,
		thumbnail: image('thumbnail', {
			label: 'Thumbnail - 170px x 170px',
		}),
		imagePost: image('imagePost', {
			label: 'Image Post',
		}),
		seoTitle,
		seoDescription,
	},
	labelResolver: (item) => `${item.name}`,
	hooks: {
		afterDelete: fileAdapterGetHooks(fileAdapter, ['thumbnail', 'imagePost']),
	},
	adminConfig: {
		defaultColumns: 'name, state, excerpt',
		defaultSort: 'createdAt',
	},
};
