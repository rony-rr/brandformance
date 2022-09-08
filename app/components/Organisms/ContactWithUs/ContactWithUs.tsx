import React from 'react';

import * as ga from 'lib/ga';

// components
import Text from 'components/Atoms/Text';
import { CustomIcon, SVGCalendar } from 'components/Atoms/Icons';

// hooks
import { useSettings } from 'hook/useSettings';

// styles
import {
	StyleContactButton,
	StyleContactCol,
	StyleContactRow,
	StyleContactTitle,
	StyleCTA,
} from './style';

interface IProps {
	onClick?: () => void;
	style?: React.CSSProperties;
	className?: string;
	variant?: 'MODAL' | 'SECTION';
}

const ContactWithUs = ({
	onClick,
	className,
	variant = 'SECTION',
	...rest
}: IProps) => {
	const settings = useSettings();
	const isSection = variant === 'SECTION';

	const internalClick = () => {
		ga.push({
			label: 'agendaEvent',
			event: 'agenda',
			category: 'engagement',
		});
		if (onClick) {
			onClick();
		} else {
			window.open('https://bit.ly/Brandformance-call', '_blank');
		}
	};

	const onClickRef = () => {
		ga.push({
			category: 'engagement',
			event: 'agenda',
			label: 'emailSent',
		});
	};

	return (
		<StyleContactRow
			className={`${className} ${!isSection ? 'justify-center' : ''}`}
			{...rest}
		>
			{isSection && (
				<StyleContactCol className="image-responsive">
					<img src="/static/img/luky.svg" alt="Brandformace luky robot" />
				</StyleContactCol>
			)}
			<StyleContactCol className="content-body">
				{isSection && (
					<StyleContactTitle variant="BRANDON_55_65_800" bold color="celeste">
						{settings.titleContact}
					</StyleContactTitle>
				)}
				<StyleContactTitle
					className="max-width"
					variant="BRANDON_25_36_800"
					html={settings.contentContact}
					color={isSection ? 'black' : 'azul'}
				/>
				<br />
				<StyleContactButton
					onClick={internalClick}
					variant="FULL_MAGENTA"
					icon={<CustomIcon icon={SVGCalendar} />}
				>
					<span dangerouslySetInnerHTML={{ __html: settings.ctaContact }} />
				</StyleContactButton>
				<br />

				<StyleCTA>
					<Text className="text-center">
						o escribanos a{' '}
						<a href={`mailto:${settings.emailContact}`} onClick={onClickRef}>
							<Text color="magenta">{settings.emailContact}</Text>
						</a>
					</Text>
				</StyleCTA>
			</StyleContactCol>
		</StyleContactRow>
	);
};

export default React.memo(ContactWithUs);
