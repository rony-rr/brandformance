import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import ButtonComponent from '../../app/components/Atoms/Button';
import { cssButtonVariant } from '../../app/components/Atoms/Button/styles';

export default {
	title: 'Atoms/Button',
	argTypes: {
		variant: {
			control: {
				type: 'select',
				options: Object.keys(cssButtonVariant),
			},
		},
		borderRadius: {
			control: {
				type: 'select',
				options: ['default', 'NO_BORDER'],
			},
		},
	},
};

const Template = (args) => (
	<>
		<ButtonComponent {...args} />

		<h2>With icon</h2>
		<ButtonComponent
			{...args}
			icon={<InfoCircleOutlined />}
		/>
	</>
);
export const Button = Template.bind({});

Button.args = {
	variant: 'FULL_PRIMARY',
	children: 'Button',
};
