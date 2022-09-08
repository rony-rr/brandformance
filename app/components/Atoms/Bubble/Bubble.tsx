import React from 'react';

// styles
import Text from '../Text';
import { StyleBubbleImage, StyleBubbleWrapper } from './style';

interface IProps {
	isDown?: boolean;
	children: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

const Bubble = ({ children, isDown = false, ...rest }: IProps) => {
	return (
		<StyleBubbleWrapper $isDown={isDown} {...rest}>
			<Text color="white" className="uppercase" variant="BRANDON_18_24_800">
				{children}
			</Text>
			<StyleBubbleImage
				// $isDown={isDown}
			/>
		</StyleBubbleWrapper>
	);
};

export default React.memo(Bubble);
