import styled from 'styled-components';
import { Layout } from 'antd';
import { colors } from 'styles/theme/theme';

const { Header, Footer, Content } = Layout;

export const StyleLayout = styled(Layout)`
	&.ant-layout {
		background: white;
	}
`;

export const StyleHeader = styled(Header)`
	&.ant-layout-header {
		position: fixed;
		top: 0;
		width: 100%;
		padding: 0;
		height: 100px;
		z-index: 100;
		background: transparent;
		transition: all 500ms;

		&.bgSolid {
			height: 65px;
			background: ${colors.magenta};
			transition: height 750ms;
		}
	}
`;

export const StyleContent = styled(Content)`
	&.ant-layout-content {
		min-height: 100vh;
	}
`;

export const StyleFooter = styled(Footer)`
	&.ant-layout-footer {
		padding: 0;
	}
`;
