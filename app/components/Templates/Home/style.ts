import styled from 'styled-components';
import { colors, mediaQueries } from 'styles/theme/theme';

export const StyleHomeTemplate = styled.div``;

export const StyleCarouselWrapper = styled.div`
	scroll-margin-top: 100px;
`;

export const StyleServicesWrapper = styled.div`
	margin-top: 139px;
	scroll-margin-top: 100px;

	${mediaQueries.minTablet} {
		margin-top: 190px;
	}
`;

export const StyleClientsWrapper = styled.div`
	padding: 120px 0 0;

	${mediaQueries.maxMobile} {
		padding: 144px 0 0;
	}
`;

export const StyleContactWithUsWrapper = styled.div`
	margin-top: 150px;
	scroll-margin-top: 100px;
`;

export const StyleProjectsWrapper = styled.div`
	margin-top: -60px;
	scroll-margin-top: -100px;

	${mediaQueries.minTablet} {
		margin-top: -120px;
	}
`;

export const StyleTeamGridWrapper = styled.div`
	// padding bottom +100px for bubble in card team
	padding: 0 0 20px;
	background-color: ${colors.azul};
	scroll-margin-top: 100px;

	${mediaQueries.minTablet} {
		padding: 0 0 30px;
	}
`;
