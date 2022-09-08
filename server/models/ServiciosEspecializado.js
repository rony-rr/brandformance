const { Relationship, Select } = require('@keystonejs/fields');
const { wysiwyg, state } = require('../../utils/KSfields');

module.exports = {
	fields: {
		tab: {
			...wysiwyg,
			isRequired: true,
		},
		icon: {
			type: Select,
			options: ['SVGGeo', 'SVGSegmentation', 'SVGRich'],
			isRequired: true,
		},
		items: {
			type: Relationship,
			ref: 'Slider',
			many: true,
			isRequired: true,
		},
		state,
	},
	labelResolver: (item) => `${item.tab}`,
	adminConfig: {
		defaultColumns: 'tab, title, content, image, state',
		defaultSort: 'createdAt',
	},
};
