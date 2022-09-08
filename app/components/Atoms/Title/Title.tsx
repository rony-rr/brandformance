import React from 'react';
import { TitleProps } from 'antd/lib/typography/Title';

import { ColorVariant } from 'styles/theme/theme';

// styles
import { TitleStyle, VariantTitle } from './styles';

interface ITitleProps extends TitleProps {
	color?: ColorVariant;
	bold?: boolean;
	html?: string;
	children?: React.ReactNode,
	variant: VariantTitle;
}

const Title = ({
	children,
	type,
	variant,
	color,
	bold,
	html,
	className,
	...restAntdProps
}: ITitleProps) => {
	if (html) {
		return (
			<TitleStyle
				level={2}
				$variant={variant}
				type={type}
				$color={color}
				className={`${className} ${bold ? 'weight-800' : ''}`}
				{...restAntdProps}
			>
				<span
					dangerouslySetInnerHTML={{
						__html: html,
					}}
				/>
			</TitleStyle>
		)
	}
	return (
		<TitleStyle
			level={2}
			$variant={variant}
			type={type}
			$color={color}
			className={`${className} ${bold ? 'weight-800' : ''}`}
			{...restAntdProps}
		>
			{children}
		</TitleStyle>
	);
};

export default React.memo(Title);
