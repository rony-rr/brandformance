const { name, image, order, state, wysiwyg, text } = require('../../utils/KSfields');
const { fileAdapter, fileAdapterGetHooks } = require('../../utils/s3FileAdapter');
const {
	Select
} = require("@keystonejs/fields");
const useFetchItemsClientsMenu = require('../../app/mock/getItemsClientsMenu');

module.exports = {
    fields: {
        name,
        state,
        intro:{
            ...text
        },
        content:{
            ...wysiwyg
        },
        conseguimos:{
            ...wysiwyg
        },
        thumbnail: image('thumbnail'),
        gallery1: image('gallery1'),
        gallery2: image('gallery2'),
        gallery3: image('gallery3'),
        gallery4: image('gallery4'),
		order
    },
    hooks: {
        afterDelete: fileAdapterGetHooks(fileAdapter, ['thumbnail', 'gallery1', 'gallery2', 'gallery3', 'gallery4'])
    },
    labelResolver: item => `${item.name}`,
    adminConfig: {
        defaultColumns: 'name, thumbnail',
        defaultSort: 'order'
    }
};