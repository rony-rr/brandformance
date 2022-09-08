import styled from 'styled-components';
import { Tabs } from 'antd';
import { colors, ColorVariant, mediaQueries } from 'styles/theme/theme';
import { cssTitleVariant } from 'components/Atoms/Title/styles';

interface IStylesTabs {
	$isTop: boolean;
	$color: ColorVariant;
}

export const StyleTabs = styled(Tabs)<IStylesTabs>`
	//mobile
	&.ant-tabs.ant-tabs-top {
		padding: 20px 0 70px 20px;

		${mediaQueries.minTablet} {
			padding: 20px 0 45px 20px;
		}

		.ant-tabs-content-holder {
			position: relative;
			border-left: none;
			margin: 0 20px 0 0;

			${mediaQueries.minTablet} {
				padding: 0 0 0 0;
			}

			.ant-tabs-content {
				width: 100%;
				padding: 0;
				border-radius: 4px;
				height: 100%;
				box-shadow: 0 4px 4px rgb(51 51 51 / 4%), 0 4px 16px rgb(51 51 51 / 8%);

				&::before {
					content: '';
					width: 100%;
					height: 20px;
					border-top-left-radius: 5px;
					border-top-right-radius: 5px;
					background: linear-gradient(90deg, #eb008a 0%, ${colors.purple2} 94%);
					position: absolute;
					top: 0;
					left: 0;
				}

				&::after {
					content: '';
					width: 100%;
					height: 20px;
					border-bottom-left-radius: 5px;
					border-bottom-right-radius: 5px;
					background: linear-gradient(
						90deg,
						${colors.magenta} -85%,
						${colors.azulVioleta} 94%
					);
					position: absolute;
					bottom: 0;
					left: 0;
				}
			}
		}

		.ant-tabs-nav {
			&:before {
				border-bottom: none;
			}

			.ant-tabs-nav-operations {
				display: none;
			}
		}

		.ant-tabs-nav-wrap {
			&:before,
			&:after {
				box-shadow: none;
			}

			.ant-tabs-ink-bar {
				background: transparent;
			}

			.ant-tabs-tab {
				height: 60px;
				padding: 0;

				.ant-tabs-tab-btn {
					max-width: 300px;
					min-width: 270px;
					padding: 0 30px 0 23px;
					${cssTitleVariant['BRANDON_18_26_900']}
					color: ${({ $color }) => colors[$color]} !important;
					text-transform: uppercase;
				}

				&.ant-tabs-tab-active {
					border-color: transparent;

					.ant-tabs-tab-btn {
						height: 60px;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						${cssTitleVariant['BRANDON_18_26_900']}
						color: ${colors.white} !important;
						text-transform: uppercase;
						background: ${({ $color }) => colors[$color]};

						* {
							color: ${colors.white} !important;
						}

						p {
							margin-bottom: 0;
						}
					}
				}
			}
		}
	}

	//end mobile

	//desktop
	&.ant-tabs.ant-tabs-left {
		padding: 20px 20px 40px;

		.ant-tabs-content-holder {
			border-left: none;
			margin-left: -55px;
			padding: 20px 0;
			min-height: calc(80% + 40px);

			.ant-tabs-content {
				width: calc(100% - 50px);
				//padding: 40px 40px 40px 45px;
				padding: 0 0 40px;
				margin-left: 50px;
				border-radius: 4px;
				height: calc(80% + 40px);
				box-shadow: 0 4px 4px rgb(51 51 51 / 4%), 0 4px 16px rgb(51 51 51 / 8%);
				position: relative;

				&::before {
					content: '';
					width: 40%;
					height: 20px;
					border-top-left-radius: 5px;
					background: linear-gradient(
						56deg,
						#eb008a 0%,
						${colors.purple2} 94%,
						#ffffff 50.5%
					);
					position: absolute;
					top: 0;
					left: 0;
				}

				&::after {
					content: '';
					width: 70%;
					height: 20px;
					border-bottom-left-radius: 5px;
					background: linear-gradient(
						55deg,
						${colors.magenta} -85%,
						${colors.azulVioleta} 94%,
						${colors.white} 94.5%
					);
					position: absolute;
					bottom: 0;
					left: 0;
				}

				.ant-tabs-tabpane {
					padding-left: 0;
				}
			}
		}

		.ant-tabs-nav {
			padding-top: 40px;
			width: 350px;
			z-index: 2;

			.ant-tabs-nav-wrap {
				overflow: initial;

				.ant-tabs-ink-bar {
					background: transparent;
				}

				.ant-tabs-tab {
					height: 60px;
					padding: 0;

					.ant-tabs-tab-btn {
						padding: 0 43px;
						${cssTitleVariant['BRANDON_18_26_900']}
						color: ${({ $color }) => colors[$color]};
						text-transform: uppercase;

						* {
							color: ${({ $color }) => colors[$color]};
							text-transform: uppercase;
						}

						p {
							margin-bottom: 0;
						}
					}

					&.ant-tabs-tab-active {
						.ant-tabs-tab-btn {
							height: 60px;
							position: absolute;
							width: 420px;
							display: flex;
							justify-content: flex-start;
							align-items: center;
							background: ${({ $color }) => colors[$color]};

							* {
								${cssTitleVariant['BRANDON_18_26_900']}
								color: ${colors.white} !important;
								text-transform: uppercase;
								font-weight: 800 !important;
							}
						}
					}
				}
			}
		}
	}

	//end desktop
`;

export const StyleTabPane = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

export const StyleTabIcon = styled.div`
	width: 30px;
`;

export const StyleTabContent = styled.div`
	width: calc(100% - 30px);
	max-width: 300px;
	font-weight: 800;

	${mediaQueries.minBigTablet} {
		max-width: 200px;
	}

	.ant-typography {
		text-align: left;
		padding-right: 20px;
		white-space: break-spaces;
	}
`;
