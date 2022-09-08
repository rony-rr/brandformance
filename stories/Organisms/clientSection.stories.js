import React from 'react';
import Clientes from '../../app/components/Organisms/Clients';

export default {
	title: 'Organisms/Clientes'
};

const Template = (args) => <div style={{ width: '100%', display: 'block' }} ><Clientes {...args} /></div>;
export const SectionProyectoss = Template.bind({});
