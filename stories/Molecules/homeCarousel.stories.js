import React from 'react';
import HomeCarouselCardComponent from '../../app/components/Molecules/HomeCarouselCards';
import Title from "../../app/components/Atoms/Title";

export default {
	title: 'Molecules/Cards/Home carousel card',
	argTypes: {
		image: {
			control: {
				type: 'text',
			},
			defaultValue: '/static/img/cards/colibri-modado-pink.png',
		},
		title: {
			control: {
				type: 'text',
			},
		},
		description: {
			control: {
				type: 'text',
			},
			defaultValue: 'Descripcion',
		},
		width: {
			control: {
				type: 'number',
			},
			defaultValue: 400,
		},
		height: {
			control: {
				type: 'number',
			},
			defaultValue: 200,
		},
		bubble: {
			control: {
				type: 'boolean',
			},
			defaultValue: false,
		},
		bubblePosition: {
			control: {
				type: 'select',
				options: ['top-left', 'bottom-left'],
			},
			defaultValue: 'top-left',
		},
	},
};

const Template = (args) => (
	<>
		<HomeCarouselCardComponent {...args} />

		<h2>Variant</h2>
		<HomeCarouselCardComponent
			{...args}
			style={{marginTop: 100}}
		  image="/static/img/cards/robot-magenta.png"
			height={339}
			width={487}
			title={(
				<Title
					color="magenta"
					variant="BRANDON_25_28_800"
					html="<strong>Inteligencia</strong> artificial"
				/>
			)}
			bubble="TENGO 5 AÑOS Y nací en costa rica"
		/>
	</>
);
export const HomeCarouselCard = Template.bind({});

HomeCarouselCard.args = {
	title: <Title variant="BRANDON_25_28_800" color="magenta">inteligencia <strong>artificial</strong></Title>
};
