import { Menu } from 'antd';
import styled, { css } from 'styled-components';

// components
import Text from 'components/Atoms/Text';
import Button from 'components/Atoms/Button/Button';
import { cssTitleVariant } from 'components/Atoms/Title/styles';

// styles
import theme, { colors, fontNames, mediaQueries } from 'styles/theme/theme';

export type IBubblePositionType = 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_RIGHT';

interface IBubbleProps {
	$bubblePosition: 'top-left' | 'bottom-left';
}

const getWidthBubble = {
	TOP_LEFT: css`
		width: 110px;
		order: 1;
	`,
	TOP_RIGHT: css`
		width: 110px;
		order: 3;
	`,
	BOTTOM_RIGHT: css`
		width: 100%;
		order: 3;
		position: absolute;
	`,
};

const getBubbleCSS = {
	TOP_LEFT: css`
		top: -70px;
		left: -15px;
	`,
	TOP_RIGHT: css`
		top: -65px;
		right: -5px;
	`,
	BOTTOM_RIGHT: css`
		bottom: 0;
		right: -50px;

		${mediaQueries.minTablet} {
			bottom: -115px;
		}
	`,
};

export const StyleButtonWhiteMagenta = styled(Button)`
	&.ant-btn {
		height: 45px !important;
		border-radius: 45px;
		margin-right: auto;
		margin-left: auto;
		line-height: 0 !important;

		${mediaQueries.minBigTablet} {
			margin-right: 0;
		}

		.anticon {
			margin-right: 0;
			line-height: 20px !important;
		}

		span {
			${cssTitleVariant.BRANDON_18_26_900}
			font-weight: normal;
			white-space: break-spaces;
		}

		* {
			font-size: 18px;
			text-transform: uppercase;
		}
	}
`;

export const StyleClientCard = styled.div`
	text-align: center;
	background: ${colors.azulVioleta};
	width: 100%;
	padding: 10px;
	border-radius: 4px;
	cursor: pointer;
	height: 200px;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: center;
	box-sizing: border-box;

	/*box-shadow: 0 2px 4px rgba(60, 43, 217, 0.15),
		0 4px 35px rgba(92, 76, 244, 0.25);*/
`;

export const StyleWrapClientImage = styled.div`
	width: 130px;
	height: 130px;
	padding: 15px;
	background-color: white;
	border-radius: 100%;
	overflow: hidden;
	display: flex;
	margin: 0 auto;
`;

export const StyleClientImage = styled.img`
	width: 100%;
	height: auto;
	object-fit: contain;
	margin-right: auto;
	margin-left: auto;
	// border-radius: 50%;
`;

export const StyleClientTitle = styled.div`
	display: block;
	font-family: ${fontNames.brandonGrotesque};
	font-weight: 300;
	font-size: 13px;
	line-height: 16px;
	text-transform: uppercase;
	margin-top: 12px;
	margin-bottom: 0;
	color: ${colors.white};
	font-weight: bold;
`;

export const StyleSECard = styled.div`
	width: 100%;
	background: transparent;
	align-items: center;
	min-height: 370px;
	display: flex;
	flex-direction: column;
	padding: 50px 15px  0 15px;

	${mediaQueries.minBigTablet} {
		padding-top: 0;
		flex-direction: row;
	}

	/*&.m-card__serviciosespecializados {
		width: 100%;
		background: transparent;
		align-items: center;
		min-height: 370px;
		display: flex;
		flex-direction: row;
		//padding: 20px 30px;
		/!*justify-content: center;
		align-items: flex-start;*!/

		.inside_row {
			width: 100%;
		}

		.img__desktop {
			text-align: center;

			img {
				margin: 0 auto;
			}

			{mediaQueries.maxTablet} {
				display: none;
			}
		}

		.title__card {
			margin-bottom: 25px;

			{mediaQueries.maxTablet} {
				display: none;
			}
		}

		.content__card {
			margin-bottom: 25px;
			width: 100%;

			{mediaQueries.maxTablet} {
				display: none;
			}
		}

		.button__container {
			{mediaQueries.maxTablet} {
				display: none;
			}
		}

		.mobile__view {
			display: none;

			.title-mobile {
				&.ant-typography {
					overflow-wrap: anywhere;
				}
			}

			{mediaQueries.maxTablet} {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				width: 100%;

				img {
					width: 35%;
					margin-right: 25px;
					margin-bottom: 2.5vh;
					max-height: 150px;
					object-fit: contain;
				}
			}
		}
	}*/
`;

export const StyleContentEspecializados = styled.div`
	flex: 1;
	width: 100%;
	order: 2;

	${mediaQueries.minBigTablet} {
		order: 1;
	}
`;

interface IContentEspPortadaProps {
	$isPortada: boolean;
}

export const StyleContentEspPortada = styled.div<IContentEspPortadaProps>`
	width: 100%;
	min-height: 150px;
	margin-top: 30px;

	.title-desk {
		display: none;
	}

	${mediaQueries.minBigTablet} {
		margin-top: 0;
		min-height: 191px;

		.title-desk {
			display: block;
			margin-bottom: 10px;
		}

		${({ $isPortada }) =>
			!$isPortada &&
			`
				padding: 50px 0 50px 100px;
			`}
	}
`;

interface IBanner {
	$image?: string;
	$isFullImage?: boolean;
}

export const StyleImg = styled.img`
	max-width: 100%;
	width: 100%;
`;

export const StyleEspBanner = styled.div`
	width: calc(100% - 30px);
	height: 150px;
	background-image: url('${({ $image }: IBanner) => $image}');
	background-size: cover;
	background-position: center right;
	background-repeat: no-repeat;

	${({$isFullImage}) => $isFullImage && `
		width: 100%;
		background-size: contain;
		height: 275px;
	`}

	${mediaQueries.minBigTablet} {
		width: 100%;
		height: 191px;
		background-size: cover;

		${({$isFullImage}) => $isFullImage && `
			background-size: contain;
			height: 275px;
		`}
	}
`;

export const StyleESpImageWrapper = styled.div`
	order: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: left;
	margin-left: 0;
	padding: 0 20px;
	margin-right: auto;

	.ant-typography {
		margin-left: 10px;
		max-width: calc(100% - 82px);
	}

	${mediaQueries.minBigTablet} {
		display: block;
		padding-right: 5%;
		order: 2;

		.ant-typography {
			display: none;
		}
	}
`;

export const StyleESpImage = styled.img`
	width: 72px;
	height: 72px;
	object-fit: contain;

	${mediaQueries.minBigTablet} {
		width: 190px;
		height: 190px;
	}
`;

export const StylePROCard = styled.div`
	&.m-card__proyectos {
		width: 100%;
		min-height: 400px;
		background: transparent;
		display: flex;
		justify-content: center;
		align-items: flex-start;

		${mediaQueries.maxMobile} {
			padding: 0 10px;
		}

		${mediaQueries.minTablet} {
			// width: 362px;
		}

		.container__bg {
			width: 100%;
			position: relative;

			img {
				width: 100%;
				border-radius: 16px;

				${mediaQueries.minTablet} {
					height: 262px;
				}
			}

			.button__share__wrapp {
				position: absolute;
				top: 25px;
				right: 25px;
			}

			.content__bg {
				position: absolute;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				background: ${colors.white};
				border-radius: 8px;
				bottom: -160px;

				${mediaQueries.minTablet} {
					bottom: -100px;
				}

				left: 5%;
				width: 90%;
				min-height: 250px;
				padding: 20px;
				box-shadow: 0 4px 4px rgba(51, 51, 51, 0.04),
					0 4px 16px rgba(51, 51, 51, 0.08);

				.button__plus__wrapp {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: flex-end;
				}
			}
		}
	}
`;

export const StyleTeamCard = styled.div`
	width: 221px;
	background: transparent;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	order: 2;

	.name__card {
		text-align: center;
		margin-top: 20px;
	}

	.text__card {
		text-align: center;
		padding: 5px 25px 0;
	}

	.position__card {
		text-align: center;
	}
`;

export const StyleTeamCardWrapper = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	flex-direction: row;

	// &.column {
		flex-direction: column;
	// }

	&.bottom-card {
		margin-bottom: 100px;

		${mediaQueries.minTablet} {
			margin-bottom: 0;
		}
	}
`;

export const StyleBubbleWrapper = styled.div`
	height: 100%;
	min-height: 100px;

	${({ $position }: { $position: IBubblePositionType }) =>
		getWidthBubble[$position]}
	.bubble {
		position: absolute;
		z-index: 10;
		${({ $position }: { $position: IBubblePositionType }) =>
			getBubbleCSS[$position]}
	}
`;

export const StyleTeamContent = styled.div`
	padding: 70px 20px 20px;
	margin-top: -50px;
	width: 221px;
	text-align: center;
	border-radius: 4px;
	box-shadow: 0 4px 4px rgba(77, 199, 235, 0.04),
		0 4px 40px rgba(77, 199, 235, 0.1);

	h2.ant-typography {
		margin-bottom: 10px;
	}

	span.ant-typography {
		margin-bottom: 0;
	}

	z-index: 1;
`;

export const StyleImage = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 75px;
	z-index: 2;
	object-fit: cover;
`;

export const StyleContatSendCard = styled.div`
	&.m-card__sendcontact {
		width: 100%;
		background: ${theme.colors.white};
		box-shadow: 0 4px 4px rgba(51, 51, 51, 0.04),
			0 4px 16px rgba(51, 51, 51, 0.08);
		border-radius: 8px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		padding: 30px 25px;
		position: relative;

		.close {
			position: absolute;
			top: 30px;
			right: 30px;
			background: ${theme.colors.primary};
			color: ${theme.colors.white};
			border-radius: 75px;
			width: 45px;
			height: 45px;
			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center;
			font-family: ${theme.fontNames.montserrat};
			font-weight: bold;
			cursor: pointer;
		}

		img {
			width: 96px;
			height: 96px;
			margin-bottom: 35px;
		}

		.content__icons {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			align-content: center;

			.separation {
				width: 10px;
			}
		}
	}
`;

export const StyleMenuShare = styled(Menu)`
	.ant-dropdown-menu-item {
		padding: 10px 20px;
		color: ${colors.azulVioleta};
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

export const StyleTextExtra = styled.div`
	.ant-typography {
		font-weight: 500;
		min-height: 0;
	}
`;

export const StyleHomeCarouselText = styled(Text)`
	&.ant-typography {
		overflow: hidden;
		margin-bottom: 0;
		max-width: 100%;
		min-height: 85px;
		font-weight: 500;
	}
`;