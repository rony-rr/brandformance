import styled, { css } from 'styled-components';
import { colors } from 'styles/theme/theme';

interface IWrapperProps {
	$isDown: boolean;
}

export type IPosition = 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_RIGHT';

const getRotateType = {
	TOP_LEFT: css`
		// transform: rotate(-45deg);
	`,
	TOP_RIGHT: css`
		// transform: rotate(-15deg);
	`,
	BOTTOM_RIGHT: css`
		// transform: rotate(20deg);
	`,
};

const getPositionBubble = {
	TOP_LEFT: css`
		bottom: 2px;
		right: 16px;
		// transform: rotate(205deg);
	`,
	TOP_RIGHT: css`
		bottom: 33px;
		left: -8px;
		// transform: rotate(311deg);
	`,
	BOTTOM_RIGHT: css`
		top: 32px;
		left: -8px;
		// transform: rotate(-15deg);
	`,
};

const getPositionBubbleArrow = {
	false: css`
		left: -6px;
		bottom: -20px;
	`,
	true: css`
		left: -6px;
		bottom: -20px;
	`,
};

export const StyleBubbleWrapper = styled.div`
	position: relative;
	display: flex;
	height: 65px;
	justify-content: center;
	align-items: ${({ $isDown }: IWrapperProps) =>
		$isDown ? 'flex-end' : 'center'};
	width: 380px;
	max-width: 100%;
	padding: 10px 18px;
	border-radius: 64px;
	background: #20bfe1;
	&:after{
		// content: url('/static/img/arrow-bubble.png');
		// position: absolute;
	}
	.uppercase {
		text-transform: uppercase;
		letter-spacing: -0.04em;
		margin-bottom: 0;
		z-index: 2;
	}
`;

export const StyleBubbleImage = styled.div`
	position: absolute;
	left: -10px;
	top: 0;
	width: 85px;
	height: 91px;
	background-image: url("/static/img/arrow-bubble1.png");
	background-size: contain;
	background-repeat: no-repeat no-repeat;
	z-index: 1;
`;

export const StyleBubbleTeamWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 200px;
	padding: 30px;
	height: 65px;
	// background: ${colors.celeste};
	background: #20bfe1;
	padding: 10px 18px;
	border-radius: 64px;

	// ${({ $position }: { $position: IPosition }) => getRotateType[$position]}
	.ant-typography {
		text-align: center;
		margin-bottom: 0 !important;
		vertical-align: middle;
		max-height: 110px;
		overflow: hidden;
		z-index: 10;
	}
`;

export const BubbleTeamBubble = styled.div`
	position: absolute;
	left: -10px;
	top: 0;
	width: 85px;
	height: 91px;
	background-image: url("/static/img/arrow-bubble1.png");
	background-size: contain;
	background-repeat: no-repeat no-repeat;
	z-index: 1;
`;
