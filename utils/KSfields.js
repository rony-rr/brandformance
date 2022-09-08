const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const {
	Text,
	Slug,
	Select,
	CalendarDay,
	File,
	Checkbox,
	Integer,
	Relationship,
} = require('@keystonejs/fields');
const { fileAdapter, fileAdapterGetHooks } = require('./s3FileAdapter');

// Var
const isDev = process.env.NODE_ENV === 'development';

//
// General Fields
//
const name = {
	type: Text,
	isRequired: true,
};
const text = { type: Text };
const checkbox = { type: Checkbox };

const slug = {
	type: Slug,
	from: 'name',
	label: 'Slug (Read-Only)',
	isUnique: true,
	access: {
		update: isDev,
	},
};

const order = {
	type: Integer,
	isRequired: true,
};
// Contents
//
const excerpt = {
	type: Text,
	isMultiline: true,
};
const wysiwyg = {
	type: Wysiwyg,
	height: 400,
	editorConfig: {
		plugins: [
			'advlist autolink link image lists charmap print preview hr anchor pagebreak',
			'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
			'table emoticons template paste help code',
		],
		toolbar:
			'code undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
			'bullist numlist outdent indent | link image | print preview media fullpage | ' +
			'forecolor backcolor emoticons | help',
		menu: {
			file: {
				title: 'File',
				items: 'newdocument restoredraft | preview | print ',
			},
			edit: {
				title: 'Edit',
				items: 'undo redo | cut copy paste | selectall | searchreplace',
			},
			view: {
				title: 'View',
				items:
					'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen',
			},
			insert: {
				title: 'Insert',
				items:
					'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime',
			},
			format: {
				title: 'Format',
				items:
					'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat',
			},
			tools: {
				title: 'Tools',
				items: 'spellchecker spellcheckerlanguage | code wordcount',
			},
			table: {
				title: 'Table',
				items: 'inserttable | cell row column | tableprops deletetable',
			},
			help: {
				title: 'Help',
				items: 'help',
			},
		},
	},
};

// Categories
const postCategorias = {
	type: Relationship,
	ref: 'PostCategoria',
	many: true,
};

//
// Selects
//

const state = {
	type: Select,
	options: ['active', 'deactivated'],
	defaultValue: 'active',
	dataType: 'string',
};

//
// Calendar
//
const date = {
	type: CalendarDay,
	// format: 'MM/DD/YYYY'
};

// SEO
const seoTitle = {
	type: Text,
	isMultiline: true,
	label: 'Título SEO',
};

const seoDescription = {
	type: Text,
	isMultiline: true,
	label: 'Descripción SEO',
};

const seoMetakeywords = {
	type: Text,
	isMultiline: true,
	label: 'Metakeywords SEO (Separar por comas)',
};

//
// Image
//
const image = (name = 'image', options = {}) => {
	return {
		...options,
		type: File,
		adapter: fileAdapter,
		hooks: {
			beforeChange: fileAdapterGetHooks(fileAdapter, [name]),
		},
	};
};

module.exports = {
	text,
	name,
	slug,
	state,
	excerpt,
	wysiwyg,
	postCategorias,
	image,
	date,
	checkbox,
	order,
	seoTitle,
	seoDescription,
	seoMetakeywords,
};
