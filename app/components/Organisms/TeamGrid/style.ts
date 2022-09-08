import styled from 'styled-components';
import { Col } from 'antd';
import { colors, mediaQueries } from 'styles/theme/theme';

interface IColProps {
	$orderDesk: number;
	$orderMobile: number;
}

export const StyleWrapper = styled.div`
	background: ${colors.azul};
	text-align: center;

	.max-487 {
		width: 487px;
		max-width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	.row-margin {
		&.ant-row {
			max-width: 100%;
			margin-left: 0 !important;
			margin-right: 0 !important;
		}
	}
`;

export const StyleCol = styled(Col)<IColProps>`
	&.ant-col {
		order: ${({ $orderMobile }) => $orderMobile};

		${mediaQueries.minTablet} {
			order: ${({ $orderDesk }) => $orderDesk};
		}
	}
`;
