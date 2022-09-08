import styled from 'styled-components';
import theme, { colors, mediaQueries } from 'styles/theme/theme';

export const StyleCarrusel = styled.div`
	/*display: flex;
	flex-wrap: wrap;
	flex-grow: 0;
	flex-shrink: 0;*/
	/*&:hover{
		.card__slide{
			opacity: 0.2;
		}
	}*/

	&.o-carrusel {
		background: ${colors.white};
		// padding: 0 0 10vh 13vw;
		width: 100%;

		.slick-slider {
			width: 100%;
			margin-top: 65px;
			cursor: pointer;

			${theme.mediaQueries.maxBigTablet} {
				margin-top: 120px;
			}

			.slick-slide *:focus {
				outline: none;
			}

			.slick-list {
				padding-top: 66px;
				padding-bottom: 30px;
				margin-top: -66px;
			}
		}

		.slick-arrow {
			cursor: pointer;

			&.slick-prev {
				position: absolute;
				top: -50px;
				left: 25px;

				svg {
					transform: rotate(180deg);
				}
			}

			&.slick-next {
				position: absolute;
				bottom: -50px;
				right: 25px;

				svg {
				}
			}
		}
	}
`;

export const CardCarousel = styled.div`
	flex-basis: 50%;
	flex-grow: 0;
	flex-shrink: 0;
	padding: 10px;
	min-height: 210px;
	transition: all 0.2s linear;

	/*&:hover{
		opacity: 1 !important;
		.bubble{
			opacity: 1 !important;
		}
	}*/
	${mediaQueries.maxBigTablet} {
		padding: 0;
		flex-basis: 100%;
		margin-bottom: 10px;
	}


`;
