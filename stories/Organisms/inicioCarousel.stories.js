import React from 'react';
import Carrusel from '../../app/components/Organisms/CarruselInicio';

export default {
	title: 'Molecules/Organisms/Carrusel Inicio'
};

const Template = (args) => <div style={{ width: '100%', display: 'block' }} ><Carrusel {...args} /></div>;
export const SectionCarruselInicio = Template.bind({});