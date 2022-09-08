import React from 'react';
import { CardServiciosEspecializados } from '../../app/components/Molecules/Cards';

export default {
	title: 'Molecules/Cards/Servicios Especializados',
	argTypes: {
		image: {
			control: {
				type: 'text',
			},
			defaultValue: '/static/img/elements/geodesia_img.png',
		},
    className: {
			control: {
				type: 'text',
			},
			defaultValue: 'm-card__serviciosespecializados',
		},
    title: {
			control: {
				type: 'text',
			},
			defaultValue: 'Capas de inteligencia',
		},
    content: {
			control: {
				type: 'text',
			},
			defaultValue: `Ayudamos a la mejor planificación, selección y compra de medios exteriores, 
                      considerando comercios cercanos, visibilidad, posibilidad de impactos secundarios en establecimientos cercanos, 
                      o la afluencia y tráfico de personas en los puntos de circuito propuesto`,
		},
    buttontxt: {
			control: {
				type: 'text',
			},
			defaultValue: 'Agendar Llamada',
		},
	},
};

const Template = (args) => <div style={{ width: '780px', display: 'flex', 
		justifyContent: 'center', alignItems: 'center', boxShadow: '0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)',
		borderRadius: '4px' }} ><CardServiciosEspecializados {...args} /></div>;
export const CardSE = Template.bind({});