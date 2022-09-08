import styled from 'styled-components';
import { Button } from 'antd';
import { colors } from 'styles/theme/theme';

export const DotsWrapperModalProject = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: row;
	border-radius: 30px;
	margin: auto;

	&.m-dots__custm{
		
	}
`;

export const DotsWrapperUl = styled.ul`
	background-color: ${colors.azulVioleta};
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: row;
	border-radius: 30px;
	margin: auto;
	list-style-type: none;
	padding: 10px;

	.slick-active > div {
		background: white !important;
	}
`;

export const StylePrevNextButton = styled(Button)`
	&.ant-btn {
		height: 14px;
		width: 20px;
		line-height: 12px;
		padding: 0;
		margin: 0;
		border: none;
		box-shadow: none;
		background-color: transparent;
		color: rgba(255, 255, 255, 0.25);

		.anticon {
			font-size: 12px;
		}

		&.prev-button {
			margin-right: 30px;
		}

		&.next-button {
			margin-left: 30px;
		}
	}
`;
