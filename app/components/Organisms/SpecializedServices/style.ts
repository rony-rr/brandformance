import styled from 'styled-components';

// components
import Title from 'components/Atoms/Title';
import { mediaQueries } from 'styles/theme/theme';

export type IBubblePositionType = 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_RIGHT';

export const StyleWrapper = styled.div``;
export const StyleTitle = styled(Title)`
	width: 555px;
	max-width: 100%;

	@media (max-width: 525px) {
		&.ant-typography {
			font-size: 35px;
			line-height: 40px;
		}
	}
`;

export const StyleContentWrapper = styled.div`
	&.o-wrapp__serviciosespecializados {
		width: 100%;
		//height: 100%;
		background: transparent;
		position: relative;

		.m-dots__custm {
			position: absolute;
			right: 0;
			bottom: -40px;

			${mediaQueries.minTablet} {
				right: 0;
				bottom: -40px;
			}

			ul {

				background-color: transparent;

				li {
					div {
						background-color: #5c4cf49e !important;
						color: white;
					}
				}

				li.slick-active {
					div {
						background-color: #5C4CF4 !important;
						color: white;
					}
				}

				button {
					span {
						svg {
							color: #5C4CF4 !important;
						}
					}
				}

			}

		}

		&::after {

		}
	}
`;

export const StyleArrowLarge = styled.div`
	text-align: right;
	margin-top: 30px;
	${mediaQueries.minBigTablet} {
		display: none;
	}
`;
