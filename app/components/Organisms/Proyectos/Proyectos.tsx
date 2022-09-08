import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import useModal from 'hook/useModal';
import { useGetProjectById } from 'mock/getProjects';
import { useQuery } from '@apollo/client';
import { Skeleton } from 'antd';

// componentes
import Title from 'components/Atoms/Title';
import { SVGB } from 'components/Atoms/Brand';
import { CardProyectos } from 'components/Molecules/Cards';
import { DotAzulArrows } from 'components/Molecules/DotSliders';
import ModalMoreInfoProject from 'components/Organisms/ModalMoreInfoProject';

// data
import { GET_ALL_PROYECTS } from 'graphql/proyecto';

// styles
import {
	StyleContentWrapper,
	StyleHeadProject,
	StyleLineStyle,
	StyleProyectosSection,
} from './style';


const Projects = () => {
	const { isOpen, toggleModal } = useModal();
	const ref = React.useRef<Slider>(null);
	// const { data: dataProjects } = useGetProjects();
	const [currentProject, setCurrentProject] = useState<string>('');

	const { data, loading } = useQuery(GET_ALL_PROYECTS);

	const nextSlider = React.useCallback(() => {
		if (ref.current) {
			ref?.current?.slickNext();
		}
	}, []);

	const prevSlider = React.useCallback(() => {
		ref?.current?.slickPrev();
	}, []);

	const ShowMoreInfoProject = React.useCallback(
		(id: string) => {
			toggleModal();
			setCurrentProject(id);
		},
		[toggleModal],
	);

	const settings = React.useMemo<Settings>(() => {
		return {
			arrows: false,
			dots: true,
			dotsClass: 'slick-dots',
			infinite: true,
			speed: 350,
			slidesToShow: 3,
			slidesToScroll: 1,
			lazyLoad: 'progressive',
			swipeToSlide: true,
			centerPadding: '10px',
			autoplaySpeed: 2500,
			appendDots: (dots) => (
				<DotAzulArrows
					style={{ marginTop: 20 }}
					dots={dots}
					onPrev={prevSlider}
					onNext={nextSlider}
				/>
			),
			customPaging: (index) => (
				<div
					key={index}
					style={{
						width: '10px',
						height: '10px',
						backgroundColor: 'rgba(255, 255, 255, 0.3)',
						color: 'white',
						borderRadius: 75,
						marginRight: '5px',
					}}
				/>
			),
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
						dotsClass: 'slick-dots',
					},
				},
				{
					breakpoint: 1024,
					settings: {
						arrows: false,
						slidesToShow: 2,
						slidesToScroll: 1,
						dots: true,
						dotsClass: 'slick-dots',
					},
				},
			],
		};
	}, [nextSlider, prevSlider]);

	let dataProjects = data?.allProyectos || [];
	const getByIdProject  = useGetProjectById(dataProjects, currentProject);

	if (loading) return <Skeleton active />;
	const slides = () => {
		return dataProjects.map((project: any) => {
			const { id, name, intro, thumbnail } = project;

			return (
				<CardProyectos
					key={id}
					id={id}
					title={name}
					image={thumbnail?.publicUrl ? thumbnail.publicUrl : ''}
					subtitle={intro}
					className="m-card__proyectos"
					onMoreInfo={ShowMoreInfoProject}
				/>
			);
		});
	};

	return (
		<StyleProyectosSection className="o-proyectos">
			<StyleHeadProject>
				<StyleLineStyle />
				<img src={SVGB} alt="Group Brand" />
				<Title color="white" variant="BRANDON_55_65_800">
					<strong>Proyectos Destacados</strong>
				</Title>
			</StyleHeadProject>
			<StyleContentWrapper>
				<Slider ref={ref} {...settings}>
					{slides()}
				</Slider>
			</StyleContentWrapper>

			{/* modals */}
			<ModalMoreInfoProject
				visible={isOpen}
				onClose={toggleModal}
				currentProject={getByIdProject}
			/>
		</StyleProyectosSection>
	);
};

export default React.memo(Projects);
