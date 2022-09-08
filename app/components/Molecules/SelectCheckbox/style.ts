import styled from 'styled-components';
import { Dropdown } from 'antd';
import { colors } from 'styles/theme/theme';

const Styles = styled(Dropdown)`
	border: 0;
	box-shadow: none;
	font-size: 1rem;
	padding: 0;
	display: flex;
	align-items: center;

	&:hover {
		color: ${colors.magenta};
	}

	.anticon.anticon-down {
		font-size: 1.3rem !important;
	}
`;

export default Styles;
