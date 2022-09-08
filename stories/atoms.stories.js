import React from 'react';

import { Col, Divider, Row, Space } from 'antd';

import GlobalStyle from '../app/styles/general';
import theme, { colors } from '../app/styles/theme/theme';

import InputElement from '../app/components/Atoms/Input/Input';
import ScrollbarWrapper from '../app/components/Atoms/Scrollbar/Scrollbar';
import {
	CustomIcon,
	SVGConvencional,
	SVGGeo,
	SVGRich,
	SVGSegmentation,
} from '../app/components/Atoms/Icons';

export default { title: 'Atoms' };

export const inputs = () => (
	<Row>
		<GlobalStyle />
		<Col
			span={24}
			style={{
				backgroundColor: theme.colors.azul,
				padding: '20px',
			}}
		>
			<Divider
				orientation="left"
				style={{
					color: theme.colors.white,
					fontWeight: theme.fontWeights.bold,
				}}
			>
				Inputs
			</Divider>
			<Space>
				<InputElement className="a-input" placeholder="your email" />
			</Space>
		</Col>
	</Row>
);

export const scrollbar = () => (
	<Row>
		<GlobalStyle />
		<Col
			span={24}
			style={{
				backgroundColor: theme.colors.azul,
				padding: '20px',
			}}
		>
			<Divider
				orientation="left"
				style={{
					color: theme.colors.white,
					fontWeight: theme.fontWeights.bold,
				}}
			>
				Inputs
			</Divider>
			<br />
			<ScrollbarWrapper className="a-scrollbar__wrapper" height="20vh">
				<div
					style={{
						height: '100vh',
						width: '100%',
					}}
				>
					Hola
				</div>
			</ScrollbarWrapper>
		</Col>
	</Row>
);

export const icons = () => (
	<Row>
		<GlobalStyle />
		<Col
			span={24}
			style={{
				backgroundColor: theme.colors.azul,
				padding: '20px',
			}}
		>
			<Divider
				orientation="left"
				style={{
					color: theme.colors.white,
					fontWeight: theme.fontWeights.bold,
				}}
			>
				Inputs
			</Divider>
			<Space
				style={{
					paddingRight: '20px',
					color: colors.white,
				}}
			>
				<CustomIcon icon={SVGGeo} />
				<CustomIcon icon={SVGSegmentation} />
				<CustomIcon icon={SVGRich} />
				<CustomIcon icon={SVGConvencional} />
			</Space>
			<Space
				style={{
					paddingRight: '20px',
					color: colors.magenta,
				}}
			>
				<CustomIcon icon={SVGGeo} />
				<CustomIcon icon={SVGSegmentation} />
				<CustomIcon icon={SVGRich} />
				<CustomIcon icon={SVGConvencional} />
			</Space>
			<Space
				style={{
					paddingRight: '20px',
					color: colors.azure,
				}}
			>
				<CustomIcon icon={SVGGeo} />
				<CustomIcon icon={SVGSegmentation} />
				<CustomIcon icon={SVGRich} />
				<CustomIcon icon={SVGConvencional} />
			</Space>
			<Space
				style={{
					paddingRight: '20px',
					color: colors.purple1,
					fontSize: 30,
				}}
			>
				<CustomIcon icon={SVGGeo} />
				<CustomIcon icon={SVGSegmentation} />
				<CustomIcon icon={SVGRich} />
				<CustomIcon icon={SVGConvencional} />
			</Space>
			<Space
				style={{
					paddingRight: '20px',
					color: colors.black,
					fontSize: 50,
				}}
			>
				<CustomIcon icon={SVGGeo} />
				<CustomIcon icon={SVGSegmentation} />
				<CustomIcon icon={SVGRich} />
				<CustomIcon icon={SVGConvencional} />
			</Space>
		</Col>
	</Row>
);
