import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

import { colors } from 'styles/theme/theme';
import { cssTitleVariant } from '../Title/styles';

export type VariantButton =
	| 'FULL_PRIMARY'
	| 'FULL_CIAN'
	| 'FULL_AZUL_VIOLETA'
	| 'FULL_MAGENTA'
	| 'FULL_WHITE'
	| 'FULL_WHITE_HOVER_MAGENTA'
	| 'OUTLINE_WHITE'
	| 'OUTLINE_PRIMARY'
	| 'OUTLINE_AZURE2';

export const cssButtonVariant = {
	FULL_PRIMARY: css`
		background: ${colors.primary};
		border-color: ${colors.primary};
		color: ${colors.white};

		&.ant-btn:hover,
		&.ant-btn:focus {
			color: ${colors.primary};
			background: #fff;
			border-color: ${colors.primary};

			* {
				color: currentColor !important;
			}
		}
	`,

	FULL_AZUL_VIOLETA: css`
		background: ${colors.azulVioleta};
		border-color: ${colors.azulVioleta};
		color: ${colors.white};

		&.ant-btn:hover,
		&.ant-btn:focus {
			color: ${colors.azulVioleta};
			background: #fff;
			border-color: ${colors.azulVioleta};

			* {
				color: currentColor !important;
			}
		}
	`,

	FULL_CIAN: css`
		background: ${colors.cian};
		border-color: ${colors.cian};
		color: ${colors.white};

		&.ant-btn:hover,
		&.ant-btn:focus {
			color: ${colors.cian};
			background: #fff;
			border-color: ${colors.cian};

			* {
				color: currentColor !important;
			}
		}
	`,

	FULL_MAGENTA: css`
		background: ${colors.magenta};
		border-color: ${colors.magenta};
		color: ${colors.white};

		&.ant-btn:hover,
		&.ant-btn:focus {
			color: ${colors.magenta};
			background: #fff;
			border-color: ${colors.magenta};

			* {
				color: currentColor !important;
			}
		}
	`,

	FULL_WHITE: css`
		background: ${colors.white};
		border-color: ${colors.white};
		color: ${colors.primary};

		&.ant-btn:hover,
		&.ant-btn:focus {
			color: ${colors.white};
			background: ${colors.primary};
			border-color: ${colors.primary};

			* {
				color: currentColor !important;
			}
		}
	`,

	OUTLINE_PRIMARY: css`
		border: 2px solid ${colors.primary};
		background: ${colors.white};
		color: ${colors.primary};

		&.ant-btn:hover,
		&.ant-btn:focus {
			color: ${colors.white};
			background: ${colors.primary};
			border: 2px solid ${colors.primary};

			* {
				color: currentColor !important;
			}
		}
	`,

	OUTLINE_WHITE: css`
		border: none;
		background: rgba(255, 255, 255, 0.1);
		color: ${colors.white};

		&.ant-btn:hover,
		&.ant-btn:focus {
			color: ${colors.primary};
			background: ${colors.white};
			border: none;

			* {
				color: currentColor !important;
			}
		}
	`,

	FULL_WHITE_HOVER_MAGENTA: css`
		border: none;
		background: ${colors.white};
		color: ${colors.magenta};

		&.ant-btn:hover,
		&.ant-btn:focus {
			color: ${colors.magenta};
			background: ${colors.white};
			border: none;

			* {
				color: currentColor !important;
			}
		}
	`,

	OUTLINE_AZURE2: css`
		border: 2px solid ${colors.azure2};
		background: white;
		color: ${colors.azure2};

		&.ant-btn:hover,
		&.ant-btn:focus {
			color: ${colors.white};
			background: ${colors.azure2};
			border: 2px solid ${colors.azure2};

			* {
				color: currentColor !important;
			}
		}
	`,
};

export type IBorderType = 'default' | 'NO_BORDER';

interface IButtonProps extends ButtonProps {
	$variant: VariantButton;
	$isBorder: IBorderType;
}

export const ButtonStyle = styled(Button)<IButtonProps>`
	&.ant-btn {
		${cssTitleVariant.BRANDON_25_36_800}
		${({ $variant }) => cssButtonVariant[$variant]}
		height: 40px;
		font-weight: 600;

		&.ant-btn-icon-only {
			height: 30px;
			width: 30px;
			padding: 0;
			line-height: 22px;

			.anticon {
				//font-size: 22px;
			}
		}

		${({ $isBorder }) =>
			$isBorder === 'NO_BORDER' &&
			`
			border-radius: 4px;
		`}
	}
`;
