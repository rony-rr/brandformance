import React from 'react';
import Proyectos from '../../app/components/Organisms/Proyectos';

export default {
	title: 'Organisms/Projects'
};

const Template = (args) => <div style={{ width: '100%', display: 'block' }} ><Proyectos {...args} /></div>;
export const SectionProyectoss = Template.bind({});
