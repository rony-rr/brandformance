import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { TabsProps } from 'antd/lib/tabs';
import { breakpoints, ColorVariant } from 'styles/theme/theme';
import { StyleTabs } from './style';

interface IProps extends TabsProps {
	color?: ColorVariant;
}

const Tabs = ({ color, ...restAntdProps }: IProps) => {
	const isDesktop = useMediaPredicate(
		`(min-width: ${breakpoints.bigTablet}px)`,
	);

	return (
		<StyleTabs
			size="large"
			tabBarGutter={10}
			$isTop={isDesktop}
			$color={color || 'magenta'}
			tabPosition={isDesktop ? 'left' : 'top'}
			{...restAntdProps}
		/>
	);
};

export default React.memo(Tabs);
