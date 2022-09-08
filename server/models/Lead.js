const { name } = require('../../utils/KSfields');

module.exports = {
	fields: {
		email: { ...name, isUnique: true },
	},
	labelResolver: (item) => `${item.email}`,
	hooks: {
		afterChange: async ({ context, updatedItem, operation }) => {
			if (operation === 'create') {
			}
		},
	},
};
