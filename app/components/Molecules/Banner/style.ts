import styled, { css } from 'styled-components';
import { mediaQueries } from 'styles/theme/theme';


interface IVisibleProps {
	$hide: 	'MOVIL' | 'DESKTOP'
}

export const cssVisibleVariant = {
	MOVIL: css`
		display: none; 
		${mediaQueries.minBigTablet} {
			display: block; 
		}
	`,
	DESKTOP: css`
		width: 100%;
		max-width: 100%;
		margin: 40vh 0 30vh;
		bottom: 0;
		padding-right: 20px;
		${mediaQueries.minBigTablet} {
			display: none; 
		}
	`
};

export const StyleBannerWrapper = styled.div`
	position: relative;
	width: 100%;
	// min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	// margin-bottom: 100px;
	${mediaQueries.minBigTablet} {
		margin-bottom: 30px;
	}
`;



export const StyleBannerImg = styled.img<IVisibleProps>`
	width: 100%;
	max-width: 100%;

	${({ $hide }) => cssVisibleVariant[$hide]}
`;

