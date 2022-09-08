import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import styleFonts from './fonts';
import { fontNames } from './theme/theme';

const GlobalStyle = createGlobalStyle`
	${styledNormalize}
	${styleFonts}
	body {
		overflow-x: hidden;
		font-family: ${fontNames.montserrat} !important;
		scroll-behavior: smooth;
	}

	* {
		scroll-behavior: smooth;
	}

	label {
		font-size: 1rem;
		line-height: 20px;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: ${fontNames.brandonGrotesque};
	}
`;

export default GlobalStyle;
