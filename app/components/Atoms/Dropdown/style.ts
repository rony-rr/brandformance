import styled from 'styled-components';
import { Button, Dropdown, Menu } from 'antd';
import { colors, ColorVariant } from '../../../styles/theme/theme';

export const ButtonsStyle = styled(Button)`
	&.ant-btn {
		width: 200px;
		height: 46px;
		border: none;
		background-color: white;
		box-shadow: 0 4px 4px rgba(51, 51, 51, 0.04),
			0 4px 16px rgba(51, 51, 51, 0.08);
		border-radius: 4px;

		.ant-typography {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			margin-bottom: 0;
		}
	}
`;

export const DropdownStyle = styled(Dropdown)`
	display: block;
`;

export const DropdownStyleIcon = styled.span`
	margin-left: 10px;
`;

export const StyleMenuContent = styled.div<{ $color: ColorVariant }>`
	.ant-dropdown-menu-item {
		padding: 8px 16px;

		.ant-dropdown-menu-title-content {
			color: ${({ $color }) => colors[$color]};

			.anticon {
				display: none;
			}
		}

		//selected item
		&.ant-dropdown-menu-item-selected {
			.ant-dropdown-menu-title-content {
				color: ${({$color}) => ($color === 'magenta' ? colors.azulVioleta : colors.magenta)};

				.anticon {
					display: block;
				}
			}
		}
	}
`;

export const StyleMenu = styled(Menu)<{ $color: ColorVariant }>`
	.ant-dropdown-menu-item {
		padding: 8px 16px;

		.ant-dropdown-menu-title-content {
			color: ${({ $color }) => colors[$color]};

			.anticon {
				display: none;
			}
		}

		//selected item
		&.ant-dropdown-menu-item-selected {
			.ant-dropdown-menu-title-content {
				color: ${({$color}) => ($color === 'magenta' ? colors.azulVioleta : colors.magenta)};

				.anticon {
					display: block;
				}
			}
		}
	}
`;

export const StyleMenuText = styled.span`
	display: flex;
	justify-content: space-between;
	align-items: center;

	.anticon {
		font-size: 14px;
	}
`;
