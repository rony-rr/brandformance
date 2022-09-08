import styled from 'styled-components';
import { colors } from 'styles/theme/theme';


export const StyleModal = styled.div`
	position: sticky;
	bottom: 0;
	z-index: 99;

	.ant-alert-content{
		max-width: 1200px;
	}

	.ant-alert {
		width: 100%;
		margin: 0 auto;
		text-align: center;
		border-radius: 4px 4px 0 0;
		background-color: ${colors.white};
		border-color: ${colors.white};
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0px 0px 20px -10px #7ea1c2;
		padding: 1.5rem;
	}

	.ant-alert-close-icon {
		position: initial;
		background-color: ${colors.celeste};
		border: 2px solid ${colors.celeste};
		margin-top: 1rem;
		padding: 10px;
		span{
			line-height: 16px;
		}

		&:active,
		&:focus {
			background-color: ${colors.celeste};
			border: ${colors.celeste};
		}

		&:hover {
			background-color: transparent;
			border: 2px solid ${colors.celeste};
		}
	}

	.ant-alert-close-text {
		color: #4a4a4a;
		font-weight: bold;
		font-size: 16px;
		text-align: center;
		letter-spacing: 0.15em;
		text-transform: uppercase;
	}
`;
