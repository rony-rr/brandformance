import React from 'react';
import { colors } from '../../app/styles/theme/theme';
import TextComponent from '../../app/components/Atoms/Text';
import { cssTextVariant } from '../../app/components/Atoms/Text/styles';

export default {
	title: 'Atoms/Typography/Text',
	argTypes: {
		color: {
			control: {
				type: 'select',
				options: Object.keys(colors),
			},
		},
		variant: {
			control: {
				type: 'select',
				options: Object.keys(cssTextVariant),
			},
		},
		html: {
			control: {
				type: 'text',
			},
		},
	},
};

const Template = (args) => <TextComponent {...args} />;

export const BasicText = Template.bind({});

BasicText.args = {
	children: 'Este es un texto de prueba',
};

export const WysiwygText = Template.bind({});

WysiwygText.args = {
	html: 'Este es un titulo de prueba',
	color: 'primary',
};
