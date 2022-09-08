import React from 'react';

import { Col, Dropdown, Menu, message, Row } from 'antd';
import {
	CopyOutlined,
	FacebookOutlined,
	LinkedinOutlined,
	ShareAltOutlined,
	WhatsAppOutlined,
} from '@ant-design/icons';

// components
import TitleComponent from 'components/Atoms/Title';
import Title from 'components/Atoms/Title';
import TextComponent from 'components/Atoms/Text';
import Button from 'components/Atoms/Button';

import { StyleMenuShare, StylePROCard } from './style';

interface CardProyectosProps {
	id: string;
	image: string;
	title: string;
	subtitle: string;
	className: string;
	onMoreInfo: (id: string) => void;
}

export const CardProyectos = React.memo<CardProyectosProps>(
	({ id, image, title, subtitle, className, onMoreInfo }) => {
		return (
			<StylePROCard className={className}>
				<Row>
					<Col span={24} className="container__bg">
						<img src={image} alt={'imagen de ' + title} />
						<Row className="button__share__wrapp">
							<Dropdown overlay={menu(id)} trigger={['click']}>
								<Button borderRadius="NO_BORDER" variant="OUTLINE_WHITE">
									<ShareAltOutlined />
								</Button>
							</Dropdown>
						</Row>
						<Col span={24} className="content__bg">
							<TitleComponent color="black" variant="BRANDON_20_28_800" bold>
								{title}
							</TitleComponent>
							<TextComponent
								isInline
								variant="MONTSERRAT_16_22_700"
								color="black"
							>
								El reto
							</TextComponent>
							<TextComponent variant="MONTSERRAT_16_22_400">
								{subtitle}
							</TextComponent>
							<Row className="button__plus__wrapp">
								<Button
									onClick={() => onMoreInfo(id)}
									borderRadius="NO_BORDER"
									variant="OUTLINE_AZURE2"
								>
									+
								</Button>
							</Row>
						</Col>
					</Col>
				</Row>
			</StylePROCard>
		);
	},
);

const copyLink = (id: string) => {
	// create link to share
	const origin = window.location.origin;
	const path = `${origin}/projects/${id}`;
	const aux = document.createElement('input');
	aux.setAttribute('value', `${path}`);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand('copy');
	document.body.removeChild(aux);
	message.success('Enlace copiado con éxito!');
};

const getUrl = (id: string, type: 'fb' | 'in' | 'wa') => {
	// create link to share
	const origin = window.location.origin;
	const path = `${origin}/projects/${id}`;
	switch (type) {
		case 'fb':
			return `https://www.facebook.com/sharer.php?u=${path}`;
		case 'in':
			return `https://www.linkedin.com/sharing/share-offsite/?url=${path}`;
		case 'wa':
			return `whatsapp://send?text=${path}`;
		default:
			return path;
	}
};

const menu = (id: string) => (
	<StyleMenuShare>
		<Menu.Item key="0">
			<Title variant="BRANDON_18_26_900" color="magenta">
				<b>Compartir Con:</b>
			</Title>
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item key="1" icon={<FacebookOutlined style={{ fontSize: 25 }} />}>
			<a target="_blank" rel="noreferrer noopener" href={getUrl(id, 'fb')}>Facebook</a>
		</Menu.Item>
		<Menu.Item key="2" icon={<LinkedinOutlined style={{ fontSize: 25 }} />}>
			<a target="_blank" rel="noreferrer noopener" href={getUrl(id, 'in')}>Linkedin</a>
		</Menu.Item>
		<Menu.Item key="3" icon={<WhatsAppOutlined style={{ fontSize: 25 }} />}>
			<a target="_blank" rel="noreferrer noopener" href={getUrl(id, 'wa')}>Whatsapp</a>
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item key="4" icon={<CopyOutlined style={{ fontSize: 25 }} />}>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/no-static-element-interactions */}
			<a onClick={() => copyLink(id)}>Copiar enlace</a>
		</Menu.Item>
	</StyleMenuShare>
);
