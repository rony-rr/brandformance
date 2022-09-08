import React from 'react';
import { useQuery } from '@apollo/client';

// components
import Container from 'components/Atoms/Container';
import Clients from 'components/Organisms/Clients';
import TeamGrid from 'components/Organisms/TeamGrid';
import Projects from 'components/Organisms/Proyectos';
import Banner from 'components/Molecules/Banner/Banner';
import Carrusel from 'components/Organisms/CarruselInicio';
import ContactWithUs from 'components/Organisms/ContactWithUs';
import SpecializedServices from 'components/Organisms/SpecializedServices';

// styles
import { HOME_QUERY } from 'graphql/home';
import {
	StyleCarouselWrapper,
	StyleClientsWrapper,
	StyleContactWithUsWrapper,
	StyleHomeTemplate,
	StyleProjectsWrapper,
	StyleServicesWrapper,
	StyleTeamGridWrapper,
} from './style';

interface GraphRes {
	allBanners: BannerProps[];
	allTarjetasInicios: TarjetaInicioProps[]
	allTabs: ServiciosTabProps[]
}

interface IMemoResProps {
	banner: BannerProps;
	cardsInicio: TarjetaInicioProps[];
	tabs: ServiciosTabProps[]
}

const defaultRes = {
	cardsInicio: [],
	banner: {
		image: {
			publicUrl: '',
		},
		imageMobile: {
			publicUrl: '',
		},
	},
	tabs: []
}

const HomeTemplate = () => {
	const { data } = useQuery<GraphRes>(HOME_QUERY);

	const { banner, cardsInicio, tabs } = React.useMemo<IMemoResProps>(() => {
		if (data) {
			return {
				cardsInicio: data?.allTarjetasInicios || [],
				banner: data.allBanners[0],
				tabs: data?.allTabs || []
			};
		}
		return defaultRes;
	}, [data]);

	return (
		<StyleHomeTemplate>
			<Banner
				image={banner.image.publicUrl}
				imageMovil={banner.imageMobile.publicUrl}
			/>
			<Container>
				<StyleCarouselWrapper id="who-we-are">
					<Carrusel items={cardsInicio} />
				</StyleCarouselWrapper>
				<StyleServicesWrapper id="services">
					<SpecializedServices tabs={tabs} />
				</StyleServicesWrapper>

				<StyleClientsWrapper id="clients">
					<Clients />
				</StyleClientsWrapper>

				<StyleContactWithUsWrapper>
					<ContactWithUs style={{ justifyContent: 'center' }} />
				</StyleContactWithUsWrapper>
			</Container>

			<StyleProjectsWrapper id="projects">
				<Projects />
			</StyleProjectsWrapper>

			<StyleTeamGridWrapper id="team">
				<Container>
					<TeamGrid />
				</Container>
			</StyleTeamGridWrapper>
		</StyleHomeTemplate>
	);
};

export default HomeTemplate;
