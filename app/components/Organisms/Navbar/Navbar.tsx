import React from 'react';
import Link from 'next/link';
import { MenuOutlined } from '@ant-design/icons';

import * as ga from 'lib/ga';
import useModal from 'hook/useModal';

// components
import { CustomIcon, SVGCalendar } from 'components/Atoms/Icons';
import SocialMedia from 'components/Molecules/SocialMedia/SocialMedia';
import MenuMobile from './MenuMobile';

import { menu } from './data';

// styles
import {
	StyleBrand,
	StyleButtonLink,
	StyleButtonMagentaWhite,
	StyleButtonMoreMobile,
	StyleButtonWhiteMagenta,
	StyleNavbar,
	StyleNavbarMenu,
	StyleOnlyDesk,
	StyleOnlyMobile,
} from './style';

interface IProps {
	isSolid: boolean;
}

const Navbar = ({ isSolid }: IProps) => {
	const { isOpen, toggleModal } = useModal();

	const onClickBrand = React.useCallback((e: any) => {
		window.scroll({
			top: 0,
			left: 0,
		});
	}, []);

	const onClickAgendar = React.useCallback(() => {
		ga.push({
			label: 'agendaEvent',
			event: 'agenda',
			category: 'engagement',
		});
		window.open('https://bit.ly/Brandformance-call', '_blank');
	}, []);

	return (
		<StyleNavbar $isSolid={isSolid}>
			{!isSolid ? (
				<>
					<StyleBrand>
						{/* Brand */}
						<Link href="/" passHref>
							<a href="/" onClick={onClickBrand}>
								<img src="/static/img/brand-nav.png" alt="" />
							</a>
						</Link>
					</StyleBrand>
				</>
			) : (
				<StyleOnlyDesk>
					{/* redes sociales */}
					<SocialMedia />
				</StyleOnlyDesk>
			)}

			{isSolid ? (
				<StyleButtonMagentaWhite
					variant="FULL_MAGENTA"
					onClick={onClickAgendar}
					icon={<CustomIcon icon={SVGCalendar} />}
				>
					<strong>Agendar</strong> llamada
				</StyleButtonMagentaWhite>
			) : (
				<>
					{/*only desk*/}
					<StyleNavbarMenu>
						{menu.map(({ title, href, key }) => (
							<Link href={href} key={key}>
								<StyleButtonLink>{title}</StyleButtonLink>
							</Link>
						))}

						{/* Agendar button */}
						<StyleButtonWhiteMagenta
							variant="FULL_WHITE_HOVER_MAGENTA"
							onClick={onClickAgendar}
							icon={<CustomIcon icon={SVGCalendar} />}
						>
							<b>Agendar</b>
						</StyleButtonWhiteMagenta>
					</StyleNavbarMenu>

					{/* only Mobile */}
					<StyleOnlyMobile>
						{/* Agendar button */}
						<StyleButtonWhiteMagenta
							variant="FULL_WHITE_HOVER_MAGENTA"
							onClick={onClickAgendar}
							icon={<CustomIcon icon={SVGCalendar} />}
						>
							<b>Agendar</b>
						</StyleButtonWhiteMagenta>

						{/* burger menu */}
						<StyleButtonMoreMobile
							onClick={toggleModal}
							icon={<MenuOutlined />}
						/>
					</StyleOnlyMobile>
				</>
			)}

			{/* menu modal mobile */}
			<MenuMobile visible={isOpen} onClose={toggleModal} />
		</StyleNavbar>
	);
};

export default React.memo(Navbar);
