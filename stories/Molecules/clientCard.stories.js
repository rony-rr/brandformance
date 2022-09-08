import React from 'react';
import { ClientCard as ClientCardComponent } from '../../app/components/Molecules/Cards';

export default {
	title: 'Molecules/Cards/Client Card',
	argTypes: {
		image: {
			control: {
				type: 'text',
			},
			defaultValue:
				'https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png',
		},
		name: {
			control: {
				type: 'text',
			},
			defaultValue: 'Name',
		},
	},
};

const Template = (args) => <ClientCardComponent {...args} />;
export const ClientCard = Template.bind({});
