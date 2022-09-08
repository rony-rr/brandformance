import React from 'react';
import { CardContactSend } from '../../app/components/Molecules/Cards';

export default {
	title: 'Molecules/Cards/Contact Send',
	argTypes: {
		image: {
			control: {
				type: 'text',
			},
			defaultValue: '/static/img/elements/send_icon.svg',
		},
    className: {
			control: {
				type: 'text',
			},
			defaultValue: 'm-card__sendcontact',
		},
    title: {
			control: {
				type: 'text',
			},
			defaultValue: 'Contact send',
		},
    text: {
			control: {
				type: 'text',
			},
			defaultValue: `That’s all :)`,
		},
	},
};

const Template = (args) => <div style={{ width: '700px' }} ><CardContactSend {...args} /></div>;
export const CardSE = Template.bind({});