import styled, { css } from 'styled-components';
import { Typography } from 'antd';
import { TitleProps } from 'antd/lib/typography/Title';

import { colors, ColorVariant, fontNames } from 'styles/theme/theme';

const { Title } = Typography;

export type VariantTitle =
	| 'BRANDON_18_26_900'
	| 'BRANDON_25_28_800'
	| 'BRANDON_25_36_800'
	| 'BRANDON_55_65_800'
	| 'BRANDON_20_28_800';

export const cssTitleVariant = {
	BRANDON_20_28_800: css`
		font-family: ${fontNames.brandonGrotesque};
		font-weight: normal;
		font-size: 20px;
		line-height: 28px;
	`,
	BRANDON_25_28_800: css`
		font-family: ${fontNames.brandonGrotesque};
		font-weight: normal;
		font-size: 25px;
		line-height: 28px;
	`,
	BRANDON_25_36_800: css`
		font-family: ${fontNames.brandonGrotesque};
		font-weight: normal;
		font-size: 25px;
		line-height: 36px;
	`,
	BRANDON_55_65_800: css`
		font-family: ${fontNames.brandonGrotesque};
		font-weight: normal;
		font-size: 55px;
		line-height: 65px;
	`,
	BRANDON_18_26_900: css`
		font-family: ${fontNames.brandonGrotesque};
		font-weight: normal;
		font-size: 18px;
		line-height: 26px;
	`,
};

interface ITitleProps extends TitleProps {
	$variant: VariantTitle;
	$color?: ColorVariant;
}

export const TitleStyle = styled(Title)<ITitleProps>`
	&.ant-typography,
	&.ant-typography h1,
	&.ant-typography h2,
	&.ant-typography h3,
	&.ant-typography h4,
	&.ant-typography h5 {
		font-weight: normal;
		${({ $variant }) => cssTitleVariant[$variant]}
		color: ${({ $color }) =>
			$color ? colors[$color] : colors.black} !important;
		text-transform: uppercase;
		margin-bottom: 0;
		margin-top: 0 !important;

		.weight-400 {
			font-weight: 400 !important;
		}

		&.weight-800 {
			font-weight: 800;
		}
	}
`;

export const PrefixAndSuffixStyle = styled.span`
	font-weight: 800 !important;
`;
