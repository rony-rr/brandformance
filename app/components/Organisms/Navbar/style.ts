import styled from 'styled-components';
import { Button as AntButton } from 'antd';

import Button from 'components/Atoms/Button';
import { colors, mediaQueries } from 'styles/theme/theme';
import { cssTitleVariant } from 'components/Atoms/Title/styles';
import { cssTextVariant } from 'components/Atoms/Text/styles';
import Modal from 'components/Molecules/Modal';

// styles

export const StyleButtonLink = styled(AntButton)`
	&.ant-btn {
		${cssTextVariant.MONTSERRAT_16_22_700}
		color: white;
		font-weight: 600;
		background: transparent;
		border-color: transparent;
		margin-right: 10px;

		&:hover,
		&:focus {
			color: ${colors.magenta};
			font-weight: 600;
			background: white;
			border-color: transparent;
		}
	}
`;

export const StyleContentModal = styled.div`
	display: block;
	margin-top: 50px;

	button {
		display: block;
		width: 100%;
		text-align: center;
		margin-bottom: 10px;
	}
`;

export const StyleButtonLinkMobile = styled(AntButton)`
	&.ant-btn {
		${cssTextVariant.MONTSERRAT_16_22_700}
		color: ${colors.primary};
		font-weight: 800;
		background: transparent;
		border-color: transparent;
		box-shadow: none;
		margin-right: 10px;
		text-transform: uppercase;

		&:hover,
		&:focus {
			color: ${colors.magenta};
			font-weight: 600;
			background: white;
			border-color: transparent;
		}
	}
`;

export const StyleNavbar = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: ${({ $isSolid }: { $isSolid: boolean }) =>
		!$isSolid ? '0 20px' : '50px'};
`;

export const StyleOnlyMobile = styled.div`
	display: block;

	${mediaQueries.minBigTablet} {
		display: none;
	}
`;

export const StyleOnlyDesk = styled.div`
	display: none;
	text-align: center;

	${mediaQueries.minBigTablet} {
		display: block;
	}
`;

export const StyleNavbarMenu = styled.div`
	display: none;
	position: relative;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	height: 100%;

	${mediaQueries.minBigTablet} {
		display: flex;
	}
`;

export const StyleBrand = styled.div`
	transition: all 350ms;

	@media (max-width: 375px) {
		img {
			width: 80px;
		}
	}

	${mediaQueries.minBigTablet} {
		display: block;
	}
`;

export const StyleButtonWhiteMagenta = styled(Button)`
	&.ant-btn {
		height: 45px;
		border-radius: 45px;
		line-height: 0 !important;

		.anticon {
			margin-right: 10px;
		}

		* {
			color: ${colors.magenta};
			${cssTitleVariant.BRANDON_18_26_900}
			font-size: 14px;
			font-weight: 800;
			text-transform: uppercase;

			${mediaQueries.minTablet} {
				font-size: 18px;
			}
		}
	}
`;

export const StyleButtonMagentaWhite = styled(Button)`
	&.ant-btn {
		height: 45px;
		border-radius: 45px;
		margin-right: auto;
		margin-left: auto;
		line-height: 0 !important;

		${mediaQueries.minBigTablet} {
			margin-right: 0;
		}

		.anticon {
			margin-right: 10px;
		}

		span {
			${cssTitleVariant.BRANDON_18_26_900}
			font-weight: normal;
			white-space: break-spaces;
		}

		* {
			font-size: 18px;
			text-transform: uppercase;
		}
	}
`;

export const StyleButtonMoreMobile = styled(AntButton)`
	&.ant-btn {
		height: 48px;
		width: 48px;
		border-radius: 48px;
		margin-left: 10px;
		border-color: transparent;
		background: rgba(34, 31, 32, 0.25);
		color: white;
	}
`;

export const StyleCustomModal = styled(Modal)`
	.ant-modal-body {
		max-height: calc(100vh - 30px);
	}
`;
