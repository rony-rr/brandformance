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
`;

export const StyleCTA = styled.div`
	max-width: 300px;
	margin-top: 20px;
`;

export const StyleContactCol = styled(Col)`
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

	&.content-body {
		width: 100%;

		display: flex;
		flex-direction: column;
    justify-content: center;
    align-items: center;
		margin-top: 1em;
	}

	.text-center {
		text-align: center;
	}
`;

export const StyleContactTitle = styled(Title)`
	&.ant-typography {
		text-transform: capitalize;
	}

	&.max-width {
		max-width: 360px;

		&.ant-typography {
			text-transform: none;
		}
	}

	p{
		margin-bottom: 0.2em;
    font-weight: 100;
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
