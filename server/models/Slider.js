const { wysiwyg, image, state, text } = require('../../utils/KSfields');
const {
	fileAdapter,
	fileAdapterGetHooks,
} = require('../../utils/s3FileAdapter');

module.exports = {
	fields: {
		label: {
			...text,
			label: 'Titulo para hacer referencia dentro del CMS',
			isRequired: true,
		},
		image: {
			...image('image'),
			isRequired: true,
		},
		portadaImage: {
			...image('portadaImage'),
			label: 'Imagen de Portada(Opcional)',
			isRequired: false,
		},
		title: wysiwyg,
		content: wysiwyg,
		bubble: text,
		extra: wysiwyg,
		state,
	},
	hooks: {
		afterDelete: fileAdapterGetHooks(fileAdapter, ['image', 'portadaImage']),
	},
	labelResolver: (item) => `${item.label}`,
	adminConfig: {
		defaultColumns: 'title, content, image, state',
		defaultSort: 'createdAt',
	},
};
