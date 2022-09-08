import React from 'react';

// components
import Text from 'components/Atoms/Text';

// styles
import { BubbleTeamBubble, IPosition, StyleBubbleTeamWrapper } from "./style";

interface IProps {
	position?: IPosition;
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

const BubbleTeam = ({ children, position = 'TOP_LEFT', ...rest }: IProps) => {
	return (
		<StyleBubbleTeamWrapper $position={position} {...rest}>
			<BubbleTeamBubble />
			<Text color="white" variant="MONTSERRAT_11_14_700">
				{children}
			</Text>
		</StyleBubbleTeamWrapper>
	);
};

export default React.memo(BubbleTeam);
