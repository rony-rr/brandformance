const {
	name,
	wysiwyg,
	seoTitle,
	seoDescription,
	seoMetakeywords,
	image,
} = require('../../utils/KSfields');
const {
	fileAdapter,
	fileAdapterGetHooks,
} = require('../../utils/s3FileAdapter');

module.exports = {
	fields: {
		titleContact: {
			...name,
			label: 'Titulo de contacto',
		},
		contentContact: {
			...wysiwyg,
			isRequired: true,
			label: 'Contenido de contacto',
		},
		ctaContact: {
			...wysiwyg,
			isRequired: true,
			label: 'CTA boton de contacto',
		},
		emailContact: {
			...name,
			label: 'Email de contacto',
		},
		titleCookie: {
			...name,
			label: 'Titulo cookies',
		},
		contentCookie: {
			...wysiwyg,
			isRequired: true,
			label: 'Contendio cookies',
		},
		ctaCookie: {
			...name,
			label: 'CTA boton de aceptar cookies',
		},
		terms: {
			...image('terms'),
			label: 'Términos y condiciones de uso',
		},
		seoTitle,
		seoDescription,
		seoMetakeywords,
	},
	hooks: {
		afterDelete: fileAdapterGetHooks(fileAdapter, ['terms']),
	},
	adminConfig: {
		defaultSort: 'createdAt',
	},
};
