import styled from 'styled-components';
import theme, { colors, mediaQueries } from 'styles/theme/theme';
import { slickCSS } from 'styles/theme/slick-css';

export const StyleClientsSection = styled.div`
	position: relative;

	&.o-clientes {
		background: ${colors.white};

		.heading__clientes {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;

			${mediaQueries.minTablet} {
				flex-direction: row;
			}
		}

		${mediaQueries.maxMobile} {
			.heading__clientes {
				h2.ant-typography {
					font-size: 35px;
					margin-bottom: 10px;
				}
			}
		}

		.slick-slider {
			width: 100%;
			margin-top: 20px;

			${theme.mediaQueries.maxBigTablet} {
				margin-top: 5vh;
			}

			.slick-slide *:focus {
				outline: none;
			}
		}

		${slickCSS};
	}
`;

export const StyleCardSlick = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	background: ${colors.white};
`;
