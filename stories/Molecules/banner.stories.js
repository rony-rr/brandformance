import React from 'react';
import BannerComponent from '../../app/components/Molecules/Banner';

export default {
	title: 'Molecules/Banner',
	argTypes: {
		image: {
			control: {
				type: 'text',
			},
			defaultValue: '/static/img/banner.png',
		},
	},
};

const Template = (args) => <BannerComponent {...args} />;
export const Banner = Template.bind({});
