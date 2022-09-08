import styled from 'styled-components';
import { Col, Row } from 'antd';

import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import { cssTitleVariant } from 'components/Atoms/Title/styles';

import { mediaQueries } from 'styles/theme/theme';

export const StyleContactRow = styled(Row)`
	max-width: 100%;
	position: relative;
	z-index: 10;

	&.justify-center {
		justify-content: center;
	}
`;

export const StyleCTA = styled.div`
	max-width: 300px;
	margin: 20px auto auto;
`;

export const StyleContactCol = styled(Col)`
	&.content-body {
		text-align: center;
	}

	&.image-responsive {
		img {
			margin-top: 40px;
			width: 300px;
			height: 317px;
		}

		${mediaQueries.minTablet} {
			position: relative;
			left: 0;

			img {
				margin-top: 0;
				width: 320px;
				height: 340px;
			}
		}

		${mediaQueries.minBigTablet} {
			img {
				margin-top: 0;
				width: 380px;
				height: 400px;
			}
		}
	}

	.text-center {
		text-align: center;
	}
`;

export const StyleContactTitle = styled(Title)`
	&.ant-typography {
		text-transform: capitalize;
		p {
			margin-bottom: 0;
		}
	}

	&.max-width {
		max-width: 360px;

		&.ant-typography {
			text-transform: none;
		}
	}
`;

export const StyleContactButton = styled(Button)`
	${cssTitleVariant.BRANDON_18_26_900}
	text-transform: uppercase;
	font-weight: normal !important;

	&.ant-btn {
		height: 45px;
		border-radius: 45px;
		white-space: break-spaces;

		.anticon {
			padding-right: 10px;
		}
	}
`;
