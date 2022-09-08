import React from 'react';
import { TextProps } from 'antd/lib/typography/Text';

import { ColorVariant } from 'styles/theme/theme';

// styles
import { TextStyle, VariantText } from './styles';

interface ITextProps extends TextProps {
	color?: ColorVariant;
	variant?: VariantText;
	isInline?: boolean;
	html?: string;
	children?: React.ReactNode;
}

const Text = ({
	children,
	color,
	isInline = false,
	variant = 'MONTSERRAT_16_22_400',
	html,
	...restAnd
}: ITextProps) => {
	if (html) {
		return (
			<TextStyle
				$isInline={isInline}
				$variant={variant}
				$color={color}
				{...restAnd}
			>
				<span
					dangerouslySetInnerHTML={{
						__html: html,
					}}
				/>
			</TextStyle>
		);
	}

	return (
		<TextStyle
			$isInline={isInline}
			$variant={variant}
			$color={color}
			{...restAnd}
		>
			{children}
		</TextStyle>
	);
};

export default React.memo(Text);
