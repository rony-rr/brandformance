import React from 'react';

import * as ga from 'lib/ga'

// components
import Text from 'components/Atoms/Text';
import { CustomIcon, SVGCalendar } from 'components/Atoms/Icons';

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
}

const ContactWithUs = ({ onClick, ...rest }: IProps) => {
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

	const onEmailClick = () => {
		ga.push({
			label: 'emailSent',
			event: 'click',
			category: 'engagement',
		});
	}

	return (
		<StyleContactRow {...rest}>
			<StyleContactCol className="image-responsive" style={{ display: 'none' }}>
				<img src="/static/img/luky.svg" alt="Brandformace luky robot" />
			</StyleContactCol>
			<StyleContactCol className="content-body">
				<StyleContactTitle
					style={{ display: 'none' }}
					variant="BRANDON_55_65_800"
					bold
					color="celeste"
				>
					Hey!
				</StyleContactTitle>
				<StyleContactTitle
					bold
					color="azul"
					className="max-width"
					variant="BRANDON_25_36_800"
				>
					Le contamos cómo juntos podemos conseguir mejores resultados,
					<p>agende una llamada con Juan</p>
				</StyleContactTitle>
				<br />
				<StyleContactButton
					onClick={internalClick}
					variant="FULL_MAGENTA"
					icon={<CustomIcon icon={SVGCalendar} />}
				>
					<b>Agendar</b>
				</StyleContactButton>
				<br />

				<StyleCTA>
					<Text className="text-center">
						o escríbenos a{' '}
						<a href="mailto:juan@brandformance.io" onClick={onEmailClick}>
							<Text color="magenta">juan@brandformance.io</Text>
						</a>
					</Text>
				</StyleCTA>
			</StyleContactCol>
		</StyleContactRow>
	);
};

export default React.memo(ContactWithUs);
