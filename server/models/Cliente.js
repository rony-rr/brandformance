const { name, image, order, state } = require('../../utils/KSfields');
const { fileAdapter, fileAdapterGetHooks } = require('../../utils/s3FileAdapter');
const {
	Select
} = require("@keystonejs/fields");
const useFetchItemsClientsMenu = require('../../app/mock/getItemsClientsMenu');

const category = {
	type: Select,
	options: useFetchItemsClientsMenu.map(({ nameItem })=> nameItem),
	defaultValue: "active",
	dataType: "string"
};

module.exports = {
    fields: {
        name,
        state,
        category,
        image: image('image'),
		order
    },
    hooks: {
        afterDelete: fileAdapterGetHooks(fileAdapter, ['image'])
    },
    labelResolver: item => `${item.name}`,
    adminConfig: {
        defaultColumns: 'name, category, image',
        defaultSort: 'order'
    }
};