import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
	width: 100%;
	padding: 0 15px;
	margin-right: auto;
	margin-left: auto;

	@media (min-width: 576px) {
		width: 540px;
	}
	@media (min-width: 768px) {
		width: 720px;
	}
	@media (min-width: 992px) {
		width: 960px;
	}
	@media (min-width: 1200px) {
		width: 1140px;
	}
`;

interface IContainerProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
	className?: string;
}

const Container = ({ children, ...rest }: IContainerProps) => (
	<ContainerStyled {...rest}>{children}</ContainerStyled>
);

export default Container;
