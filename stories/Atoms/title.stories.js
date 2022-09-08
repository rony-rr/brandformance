import React from 'react';
import { colors } from '../../app/styles/theme/theme';
import TitleComponent from '../../app/components/Atoms/Title';
import { cssTitleVariant } from '../../app/components/Atoms/Title/styles';

export default {
	title: 'Atoms/Typography/Title',
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
				options: Object.keys(cssTitleVariant),
			},
		},
		html: {
			control: {
				type: 'text',
			},
		},
		bold: {
			control: {
				type: 'boolean',
			},
		},
	},
};

const Template = (args) => <TitleComponent {...args} />;

const TemplateVariants = (args) => <>
	<TitleComponent {...args} />
	<TitleComponent {...args} color="magenta" />
	<TitleComponent {...args} color="azure"/>
	<TitleComponent {...args} color="azulVioleta"/>
	<TitleComponent {...args} color="cian"/>
	<TitleComponent {...args} color="purple1"/>
	<TitleComponent {...args} color="purple2"/>
	<TitleComponent {...args} color="purpleBlue"/>
</>;

export const BasicTitle = Template.bind({});

BasicTitle.args = {
	variant: 'BRANDON_25_36_800',
	children: 'Este es un titulo de prueba',
};

export const BoldTitle = TemplateVariants.bind({});

BoldTitle.args = {
	variant: 'BRANDON_25_36_800',
	children: 'Este es un titulo de prueba',
	bold: true,
	color: 'primary',
};

export const CustomBoldTitle = TemplateVariants.bind({});

CustomBoldTitle.args = {
	variant: 'BRANDON_25_36_800',
	color: 'magenta',
	html: '<strong>Este</strong> es un titulo de <strong>prueba</strong>',
};
