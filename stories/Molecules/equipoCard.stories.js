import React from 'react';
import { CardEquipo } from '../../app/components/Molecules/Cards';

export default {
	title: 'Molecules/Cards/Equipo',
	argTypes: {
		image: {
			control: {
				type: 'text',
			},
			defaultValue: '/static/img/elements/example_bg.png',
		},
    className: {
			control: {
				type: 'text',
			},
			defaultValue: 'm-card__team',
		},
    name: {
			control: {
				type: 'text',
			},
			defaultValue: 'Susana Fallas',
		},
    description: {
			control: {
				type: 'text',
			},
			defaultValue: `Responsable de Innovación, Tecnología y Trafficking`,
		},
    position: {
			control: {
				type: 'text',
			},
			defaultValue: 'CEO',
		},
	},
};

const Template = (args) => <div style={{ width: '450px', padding: '40px', background: 'rgba(92, 76, 244, 1)' }} ><CardEquipo {...args} /></div>;
export const CardSE = Template.bind({});