import React from 'react';
import DropdownComponent from '../../app/components/Atoms/Dropdown';

export default {
	title: 'Atoms/Dropdown',
	argTypes: {
		isHover: {
			control: {
				type: 'boolean',
			},
		},
		labelColor: {
			type: 'select',
			options: ['magenta', 'azulVioleta'],
		},
		label: {
			control: {
				type: 'text',
			},
			defaultValue: 'Industria',
		},
	},
};

const Template = (args) => <DropdownComponent {...args} />;

export const Dropdown = Template.bind({});

Dropdown.args = {
	items: [
		{
			label: 'Industria 1',
			value: 'industria-1',
		},
		{
			label: 'Industria 2',
			value: 'industria-2',
		},
	],
};
