import styled from 'styled-components';
import Text from 'components/Atoms/Text/Text';
import { slickCSS } from 'styles/theme/slick-css';

export const StyleContactUs = styled.div`
	margin-top: 30px;
	text-align: center;
`;
export const StyleSlider = styled.div`
	width: 564px;
	margin-top: 40px;
	max-width: 100%;
	margin-left: auto;
	margin-right: auto;

	${slickCSS};

	.slick-slider.slick-initialized {
		//width: 564px !important;
	}

	.slick-slide {
		width: 564px;
		max-width: 100%;
		padding: 0 5px;

		img {
			width: 564px;
			max-width: 100%;
			height: 312px;
			object-fit: cover;
			border-radius: 16px;

			&.Hospital-Clinica-Biblica {
				object-fit: contain;
			}
		}
	}
`;

export const StyleTitle = styled(Text)`
	&.ant-typography {
		text-align: center;
		margin-top: 10px !important;
	}
`;
