import styled from 'styled-components';
import { Modal } from 'antd';
import { mediaQueries } from 'styles/theme/theme';

export const StyleModal = styled(Modal)`
	.ant-modal-close {
		background: transparent;
		border-radius: 8px;

		${mediaQueries.minTablet} {
			background: white;
		}
	}

	.ant-modal-content,
	.ant-modal-body {
		border-radius: 8px;
	}

	.ant-modal-body {
		position: relative;
		max-height: calc(100vh - 100px);
		overflow-y: hidden;
		padding-right: 0;

		${mediaQueries.minTablet} {
			padding-right: 30px;
		}

		&:after {
			content: '';
			border: 15px solid white;
			background: white;
			position: absolute;
			bottom: 0;
			width: 100%;
			left: 0;
		}
	}
`;

export const StyleIconClose = styled.div`
	padding: 0;
	margin: 17px 0;
	border: none;
	height: 44px;
	width: 44px;
	box-shadow: none;
`;
