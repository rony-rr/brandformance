import React from 'react';

// components
import Title from 'components/Atoms/Title';
import Text from 'components/Atoms/Text';
import { BubbleTeam } from 'components/Atoms/Bubble';

import {
	IBubblePositionType,
	StyleBubbleWrapper,
	StyleImage,
	StyleTeamCard,
	StyleTeamCardWrapper,
	StyleTeamContent,
} from './style';

interface CardTeamProps {
	image: string;
	name: string;
	description: string;
	position: string;
	className?: string;
	bubble: string;
	bubblePosition?: IBubblePositionType;
}

export const CardEquipo = React.memo(
	({
		image,
		name,
		description,
		position,
		className,
		bubble,
		bubblePosition = 'TOP_LEFT',
	}: CardTeamProps) => {
		return (
			<StyleTeamCardWrapper
				className={bubblePosition === 'BOTTOM_RIGHT' ? 'column bottom-card' : ''}
			>
				<StyleTeamCard className={className}>
					<StyleImage src={image} alt={'imagen de ' + name} />
					<StyleTeamContent>
						<Title bold color="white" variant="BRANDON_20_28_800">
							{name}
						</Title>
						<Text variant="MONTSERRAT_14_20_400" color="white">
							{description}
						</Text>
						<Text variant="MONTSERRAT_14_20_400" color="white">
							<b>{position}</b>
						</Text>
					</StyleTeamContent>
				</StyleTeamCard>
				<StyleBubbleWrapper $position={bubblePosition}>
					<BubbleTeam className="bubble" position={bubblePosition}>
						{bubble}
					</BubbleTeam>
				</StyleBubbleWrapper>
			</StyleTeamCardWrapper>
		);
	},
);
