import React from 'react';
import { CardProyectos } from '../../app/components/Molecules/Cards';

export default {
	title: 'Molecules/Cards/Projects',
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
			defaultValue: 'm-card__proyectos',
		},
    title: {
			control: {
				type: 'text',
			},
			defaultValue: 'Metalub',
		},
    content: {
			control: {
				type: 'text',
			},
			defaultValue: `Atraer al público y generar interés en los usuarios que iban recurrentemente a ese centro comercial.`,
		},
    subtitle: {
			control: {
				type: 'text',
			},
			defaultValue: 'El reto',
		},
	},
};

const Template = (args) => <div style={{ width: '780px' }} ><CardProyectos {...args} /></div>;
export const ProyectosCard = Template.bind({});
