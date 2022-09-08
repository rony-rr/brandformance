import styled from 'styled-components';
import Container from 'components/Atoms/Container';

import { mediaQueries } from 'styles/theme/theme';

export const StyleBlogTemplate = styled.div``;

export const CustomContainer = styled(Container)`
	position: relative;
	padding-top: 0;

	${mediaQueries.minTablet} {
		margin-top: -160px;
	}
`;

export const StylePostTemplate = styled.div`
	.a-divider {
		width: 100%;
		height: 30px;
	}

	.a-banner {
		img {
			margin: 0 0;

			${mediaQueries.maxBigTablet} {
				padding-right: 0;
				filter: saturate(0.75);
			}
		}
	}

	.a-title__post_bg {
		position: absolute;
		top: 25%;
		width: 40%;
		display: none;

		${mediaQueries.minBigTablet} {
			display: block;
		}
	}

	.a-title__post_mb {
		${mediaQueries.minBigTablet} {
			display: none;
		}
	}

	.m-content {
		width: 100%;
	}
`;
