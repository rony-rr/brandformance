import styled, { css } from 'styled-components';
import { Typography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';

import { colors, ColorVariant, fontNames } from 'styles/theme/theme';

const { Text } = Typography;

export type VariantText =
	| 'MONTSERRAT_11_14_400'
	| 'MONTSERRAT_16_22_400'
	| 'MONTSERRAT_14_20_400'
	| 'MONTSERRAT_20_27_400'
	| 'MONTSERRAT_16_22_700'
	| 'MONTSERRAT_11_14_700'
	| 'MONTSERRAT_32_40_700'
	| 'BRANDON_12_20_800'
	| 'BRANDON_18_20_400'
	| 'BRANDON_16_20_800'
	| 'BRANDON_18_24_800';

export const cssTextVariant = {
	MONTSERRAT_11_14_400: css`
		font-family: ${fontNames.montserrat};
		font-weight: 400;
		font-size: 11px;
		line-height: 14px;
	`,
	MONTSERRAT_14_20_400: css`
		font-family: ${fontNames.montserrat};
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
	`,
	MONTSERRAT_16_22_400: css`
		font-family: ${fontNames.montserrat};
		font-weight: 400;
		font-size: 16px;
		line-height: 22px;
	`,
	MONTSERRAT_16_22_700: css`
		font-family: ${fontNames.montserrat};
		font-weight: 700;
		font-size: 16px;
		line-height: 22px;
	`,
	MONTSERRAT_11_14_700: css`
		font-family: ${fontNames.montserrat};
		font-weight: 700;
		font-size: 11px;
		line-height: 14px;
	`,
	MONTSERRAT_20_27_400: css`
		font-family: ${fontNames.montserrat};
		font-weight: normal;
		font-size: 20px;
		line-height: 27px;
	`,
	MONTSERRAT_32_40_700: css`
		font-family: ${fontNames.montserrat};
		font-weight: 700;
		font-size: 32px;
		line-height: 40px;
	`,
	BRANDON_12_20_800: css`
		font-family: ${fontNames.brandonGrotesque};
		font-weight: 800;
		font-size: 12px;
		line-height: 20px;
	`,
	BRANDON_16_20_800: css`
		font-family: ${fontNames.brandonGrotesque};
		font-weight: 800;
		font-size: 16px;
		line-height: 20px;
	`,
	BRANDON_18_20_400: css`
		font-family: ${fontNames.brandonGrotesque};
		font-weight: normal;
		font-size: 18px;
		line-height: 20px;
	`,
	BRANDON_18_24_800: css`
		font-family: ${fontNames.brandonGrotesque};
		font-weight: 800;
		font-size: 18px;
		line-height: 24px;
	`,
};

interface ITextProps extends TextProps {
	$variant: VariantText;
	$color?: ColorVariant;
	$isInline: boolean;
}

export const TextStyle = styled(Text)<ITextProps>`
	&.ant-typography {
		${({ $variant }) => cssTextVariant[$variant]}
		color: ${({ $color }) => ($color ? colors[$color] : colors.black)};
		${({ $isInline }) => !$isInline && 'display: block;'}
		margin-bottom: 20px;
		margin-top: 0 !important;
	}
`;

export const PrefixAndSuffixStyle = styled.span`
	font-weight: 800;
`;
