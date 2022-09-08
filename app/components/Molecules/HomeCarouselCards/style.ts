import styled from 'styled-components';

import Text from 'components/Atoms/Text';
import { colors, mediaQueries } from 'styles/theme/theme';

interface IBubbleProps {
	$bubblePosition: 'top-left' | 'bottom-left';
}

export const StyleCardWrapper = styled.div`
	position: relative;
	height: 100%;
`;

export const StyleHomeCarouselCard = styled.div`
	position: relative;
	background: ${colors.white};
	width: 100%;
	min-height: ${({ $height }: { $image: string; $height: number }) =>
		$height}px;
	height: 100%;
	box-shadow: 0 4px 4px rgba(51, 51, 51, 0.04),
		0 4px 16px rgba(51, 51, 51, 0.08);
	border-radius: 4px;
	overflow: hidden;

	${mediaQueries.minBigTablet} {
		background-image: url('${({ $image }) => $image}');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: right center;
	}
`;

export const StyleCarouselImageWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	align-self: stretch;
	flex: 1.5 1;
	background: ${colors.white};
	z-index: 1;
`;

export const StyleHomeCarouselImage = styled.div`
	width: 100%;
	height: 149px;
	background-image: url('${({ $image }: { $image: string }) => $image}');
	background-position: right center;
	background-repeat: no-repeat no-repeat;
	background-size: contain;

	${mediaQueries.minMobileSm} {
		height: 200px;
	}

	${mediaQueries.minTablet} {
		display: none;
	}
`;

export const StyleHomeCarouselBody = styled.div`
	display: flex;
	flex-direction: column;
	flex: 2 1;
	height: 100%;
	padding: 24px;
	z-index: 2;
	max-height: 100%;
	overflow: hidden;

	${mediaQueries.minTablet} {
		padding: 49px 99px 34px;
	}
`;

export const StyleHomeCarouselTitle = styled.div`
	display: block;
	margin-bottom: 12px;

	${mediaQueries.maxBigTablet} {
		strong {
			display: block;
		}
	}
`;

export const StyleHomeCarouselText = styled(Text)`
	&.ant-typography {
		overflow: hidden;
		margin-bottom: 0;
		width: 441px;
		max-width: 100%;
		min-height: 85px;
		font-weight: 500;
	}
`;


export const StyleTextExtra = styled.div`
	//margin-top: 30px;
	margin-left: 75px;
	.ant-typography {
		font-weight: 500;
		min-height: 0;
	}
`;

export const StyleBubble = styled.div`
	//position: absolute;
	margin-top: 20px;
	margin-left: 10px;
	z-index: 10;
	height: 98px;

	${mediaQueries.maxTablet} {
		.ant-typography {
			font-size: 14px;
			line-height: 16px;
		}
	}

	${({ $bubblePosition }: IBubbleProps) =>
		$bubblePosition === 'top-left'
			? `
			top: -50px;
			left: 0;
		`
			: `
			bottom: 0px;
			right: 0px;
		`}
`;
