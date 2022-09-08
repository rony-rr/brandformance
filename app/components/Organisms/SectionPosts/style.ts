import styled from 'styled-components';
import { mediaQueries } from 'styles/theme/theme';

export const StyleSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	.o--grid__Posts {
		width: 100%;
		padding: 50px 0;

		${mediaQueries.minTablet} {
			padding: 50px 0;
		}
	}
`;
