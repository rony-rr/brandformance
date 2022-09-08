import styled from 'styled-components';

// styles
import { colors, mediaQueries } from 'styles/theme/theme';

export const StyleFooter = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 350px;
	background: ${colors.azul};
`;

export const StyleFooterLine = styled.div`
	position: absolute;
	top: calc(50% + 35px);
	left: 0;
	height: 5px;
	border-top-right-radius: 10px;
	width: calc(50% + 30px);
	background: linear-gradient(
		90deg,
		#3171f0 27.42%,
		#9402ee 64.44%,
		#f00381 100%
	);
`;

export const BrandImage = styled.img`
	max-height: 163px;
	max-width: 359px;
	max-width: 100%;
	object-fit: contain;
	padding: 0 15px;
`;

export const StyleMediaSocial = styled.div`
	margin-top: -30px;
	margin-left: 60px;
`;

export const StyleContentSocialMedia = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export const StyleCopyright = styled.div`
	display: block;
	justify-content: space-between;
	align-items: center;
	min-height: 51px;
	width: 100%;
	background: ${colors.azul};
	padding: 8px 25px;

	${mediaQueries.minTablet} {
		display: flex;
		padding: 8px 49px;

		span.ant-typography {
			margin-bottom: 0;
		}
	}
`;

export const StyleTermsLink = styled.a`
	color: white;
	text-decoration: underline;

	&:hover {
		color: white;
		text-decoration: underline;
	}
`;
