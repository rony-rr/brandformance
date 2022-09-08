import React from 'react';
import { ColorVariant } from 'styles/theme/theme';
import { ScrollbarStyle } from './style';

interface ScrollWrapperProps {
	className?: string;
	height?: string;
	color?: ColorVariant;
	style?: React.CSSProperties;
	children: React.ReactNode;
}

const ScrollbarWrapper = ({
	children,
	className,
	style,
	color = 'cian',
	height = 'auto',
}: ScrollWrapperProps) => (
	<ScrollbarStyle
		style={style}
		className={className}
		$alto={height}
		$color={color}
	>
		{children}
	</ScrollbarStyle>
);

export default React.memo(ScrollbarWrapper);
