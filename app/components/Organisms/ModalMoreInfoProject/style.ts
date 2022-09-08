import styled from 'styled-components';
import { slickCSS } from 'styles/theme/slick-css';

// components
import Text from 'components/Atoms/Text';

export const ModalContentStyle = styled.div`
	padding-bottom: 100px;
`;

export const StyleSlider = styled.div`
	width: 564px;
	margin-top: 40px;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;
`;

export const StyleTitle = styled(Text)`
	&.ant-typography {
		text-align: center;
		margin-top: 10px !important;
	}
`;

export const StyleContactUs = styled.div`
	margin-top: 30px;
	text-align: center;
`;
