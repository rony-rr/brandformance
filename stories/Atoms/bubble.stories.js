import React from 'react';
import BubbleComponent, { BubbleTeam } from "../../app/components/Atoms/Bubble";

export default {
	title: 'Atoms/Bubble',
	argTypes: {
		isDown: {
			control: {
				type: 'boolean',
			},
		},
		children: {
			control: {
				type: 'text',
				default: 'TENGO 5 AÑOS Y nací en costa rica',
			},
		},
	},
};

const Template = (args) => (
	<>
		<BubbleComponent {...args}>
			{!args.isDown ? args.children : 'Multidispositivo'}
		</BubbleComponent>

		<h2>Variant</h2>
		<BubbleComponent {...args} isDown>
			Multidispositivo
		</BubbleComponent>

		<div style={{ padding: 100 }}>
			<BubbleTeam position="TOP_LEFT">
				cool quote copy here máx 60 caracteres.
			</BubbleTeam>
			<BubbleTeam position="TOP_RIGHT">
				cool quote copy here máx 60 caracteres.
			</BubbleTeam>
			<BubbleTeam position="BOTTOM_RIGHT">
				cool quote copy here máx 60 caracteres.
			</BubbleTeam>
		</div>
	</>
);
export const Bubble = Template.bind({});

Bubble.args = {
	variant: 'FULL_PRIMARY',
	children: 'TENGO 5 AÑOS y nací en costa rica',
};
