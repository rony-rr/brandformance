import { Col } from 'antd';
import styled from 'styled-components';
import Title from 'components/Atoms/Title';
import { colors, mediaQueries } from 'styles/theme/theme';

export const StyleCard = styled(Col)`
	padding: 10px;

	${mediaQueries.minTablet} {
		padding: 15px;
	}
`;

export const StyleContainer = styled(Col)`
	&.m-container__card {
		box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.15);
		border-radius: 20px;
	}
`;

export const StyleTitle = styled(Title)`
	margin-bottom: 15px;
`;

export const StyledSpace = styled.div`
	width: 100%;
	height: 15px;
`;

export const StyledImage = styled.img`
	width: 100%;
	height: 320px;
	object-fit: cover;
	border-radius: 20px 20px 0 0;
`;

export const StyleBoxContent = styled.div`
	padding: 20px 15px;
`;
