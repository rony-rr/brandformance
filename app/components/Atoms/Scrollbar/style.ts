import styled from 'styled-components';
import theme, { colors, ColorVariant } from "styles/theme/theme";

export const ScrollbarStyle = styled.div`
	padding-right: 20px;
	overflow-y: auto;
	width: 100%;
	height: ${({ $alto }: { $alto: string; $color: ColorVariant }) => $alto};

	scrollbar-width: auto;
	scrollbar-color: ${theme.colors.cian} rgba(255, 255, 255, 0.5);

	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	&::-webkit-scrollbar-button {
		width: 0;
		height: 0;
	}

	&::-webkit-scrollbar-thumb {
			/*background: linear-gradient(
			29.08deg,
			${theme.colors.magenta} 25.57%,
			${theme.colors.azulVioleta} 50.27%,
			${theme.colors.azul} 74.16%
		);*/
		background: ${({ $color }) => colors[$color]};
		border: none;
		border-radius: 50px;
	}

	&::-webkit-scrollbar-thumb:hover,
	&::-webkit-scrollbar-thumb:active {
			/*background: linear-gradient(
			29.08deg,
			${theme.colors.magenta} 25.57%,
			${theme.colors.azulVioleta} 50.27%,
			${theme.colors.azul} 74.16%
		);*/
		background: ${({ $color }) => colors[$color]};
	}

	&::-webkit-scrollbar-track {
		//border: 0 solid rgba(255, 255, 255, 0.5);
		border-radius: 50px;
		background: rgba(77, 199, 235, .1);
	}

	&::-webkit-scrollbar-track:hover,
	&::-webkit-scrollbar-track:active {
		background: rgba(77, 199, 235, .1);
	}

	&::-webkit-scrollbar-corner {
		background: transparent;
	}
`;
