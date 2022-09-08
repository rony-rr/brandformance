import styled from 'styled-components';

import { colors, mediaQueries } from 'styles/theme/theme';
import { slickCSS } from 'styles/theme/slick-css';

export const StyleLineStyle = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	transform: rotate(-20deg);

	${mediaQueries.minTablet} {
		transform: rotate(-10deg);
	}

	&:after {
		content: '';
		width: 95vw;
		height: 30px;
		background: linear-gradient(
			45deg,
			${colors.azul} 0.21%,
			${colors.azulVioleta} 50.94%,
			${colors.magenta} 100%
		);
		position: absolute;
		right: 5px;
		top: 0;
		-webkit-transform: skew(-20deg);
		-moz-transform: skew(-20deg);
		-ms-transform: skew(-20deg);
		-o-transform: skew(-20deg);
		transform: skew(-20deg);

		${mediaQueries.minTablet} {
			top: 70px;
			right: 3px;
			width: 40vw;
			-webkit-transform: skew(-10deg);
			-moz-transform: skew(-10deg);
			-ms-transform: skew(-10deg);
			-o-transform: skew(-10deg);
			transform: skew(-10deg);
		}

		@media (min-width: 1100px) {
			top: 65px;
		}

		@media (min-width: 1200px) {
			top: 50px;
		}

		@media (min-width: 1300px) {
			top: 42px;
		}

		@media (min-width: 1400px) {
			top: 33px;
		}

		@media (min-width: 1500px) {
			top: 25px;
		}

		@media (min-width: 1600px) {
			top: 17px;
		}

		@media (min-width: 1800px) {
			top: 7px;
		}

		@media (min-width: 1900px) {
			top: 0;
		}

		@media (min-width: 2100px) {
			display: none;
		}
	}
`;

export const StyleHeadProject = styled.div`
	position: relative;
	width: 100%;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	margin-top: 75px;
	padding: 200px 20px 0;
	background: linear-gradient(
		160deg,
		rgb(255, 255, 255) 29%,
		${colors.azul} 20.1%
	);

	@media (min-width: 375px) {
		background: linear-gradient(
			160deg,
			rgb(255, 255, 255) 32%,
			${colors.azul} 20.1%
		);
	}

	@media (min-width: 420px) {
		background: linear-gradient(
			160deg,
			rgb(255, 255, 255) 34%,
			${colors.azul} 20.1%
		);
	}

	@media (min-width: 450px) {
		background: linear-gradient(
			160deg,
			rgb(255, 255, 255) 35%,
			${colors.azul} 20.1%
		);
	}

	@media (min-width: 520px) {
		background: linear-gradient(
			160deg,
			rgb(255, 255, 255) 38%,
			${colors.azul} 20.1%
		);
	}

	@media (min-width: 568px) {
		background: linear-gradient(
			160deg,
			rgb(255, 255, 255) 40%,
			${colors.azul} 20.1%
		);
	}

	@media (min-width: 640px) {
		background: linear-gradient(
			160deg,
			rgb(255, 255, 255) 42%,
			${colors.azul} 20.1%
		);
	}

	@media (min-width: 706px) {
		background: linear-gradient(
			160deg,
			rgb(255, 255, 255) 45%,
			${colors.azul} 20.1%
		);
	}

	${mediaQueries.minTablet} {
		margin-top: 5vh;
		padding: 200px 54px 0;
		background: linear-gradient(
			170deg,
			rgb(255, 255, 255) 47%,
			${colors.azul} 20.1%
		);
	}

	${mediaQueries.maxMobile} {
		.ant-typography {
			font-size: 35px;
			line-height: 41px;
		}
	}

	img {
		margin-bottom: 5vh;
	}
`;

export const StyleProyectosSection = styled.div`
	position: relative;
	max-width: 100%;
	overflow: hidden;

	&.o-proyectos {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		${slickCSS};

		.slick-slide {
			padding: 10px;
		}
	}
`;

export const StyleContentWrapper = styled.div`
	width: 100%;
	background-color: ${colors.azul};
	padding: 40px 0;

	${mediaQueries.minBigTablet} {
		padding: 80px 200px;
	}
`;
