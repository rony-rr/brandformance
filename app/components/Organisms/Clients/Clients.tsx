import React from 'react';
import Slider, { Settings } from 'react-slick';
import { useQuery } from '@apollo/client';
import { Skeleton, Empty } from 'antd';

// Hooks
import dropDownData from 'mock/getItemsClientsMenu';
// import { useFetchItemsClients } from 'mock/getItemsClients';

// componentes
import DropDown from 'components/Atoms/Dropdown';
import TitleComponent from 'components/Atoms/Title';
import { ClientCard as ClientCardComponent } from 'components/Molecules/Cards';
import { DotAzulArrows } from 'components/Molecules/DotSliders';

import { GET_ALL_CLIENTS } from 'graphql/client';
import { StyleCardSlick, StyleClientsSection } from './style';

const Clients = () => {
	const ref = React.useRef<Slider>(null);
	// const { data: dataClients } = useFetchItemsClients();
	// const { data: dropDownData } = useFetchItemsClientsMenu();
	const [currentCategory, setCategory] = React.useState<string | undefined>();
	const { data, loading } = useQuery(GET_ALL_CLIENTS);

	const onChangeCategory = React.useCallback((value: string) => {
		setCategory(value);
	}, []);

	const nextSlider = React.useCallback(() => {
		if (ref.current) {
			ref?.current?.slickNext();
		}
	}, []);

	const prevSlider = React.useCallback(() => {
		ref?.current?.slickPrev();
	}, []);

	const settings = React.useMemo<Settings>(() => {
		return {
			arrows: false,
			dots: true,
			centerMode: true,
			infinite: true,
			speed: 350,
			slidesToShow: 1,
			rows: 2,
			slidesPerRow: 4,
			centerPadding: '10px',
			appendDots: (dots) => (
				<DotAzulArrows
					style={{
						marginTop: 60,
					}}
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
						slidesPerRow: 1,
						centerMode: false,
					},
				},
				{
					breakpoint: 1024,
					settings: {
						arrows: false,
						slidesToShow: 2,
						slidesToScroll: 1,
						slidesPerRow: 1,
						centerMode: false,
					},
				},
				{
					breakpoint: 1200,
					settings: {
						arrows: false,
						slidesToShow: 3,
						slidesToScroll: 1,
						slidesPerRow: 1,
						centerMode: false,
					},
				},
			],
		};
	}, [prevSlider, nextSlider]);

	const transformDropDown = React.useMemo<IMenu[]>(() => {
		return [
			{
				label: 'Todos',
				value: '',
			},
			...dropDownData.map((i) => ({
				label: i.nameItem,
				value: i.valorItem,
			})),
		];
	}, [dropDownData]);

	if (loading) return <Skeleton active />;
	if (!data && !data?.allClientes && !data?.allClientes?.length) {
		return <Empty description="No hay información disponible" />;
	}

	const { allClientes } = data;
	const dataClients = allClientes;

	// render slides for category
	const slides = () => {
		let data = dataClients;
		if (currentCategory) {
			data = data.filter((i: any) => i.category === currentCategory);
		}
		return data.map((client: any) => {
			let { id, name, image } = client;
			image = image?.publicUrl ? image.publicUrl : null;

			return (
				<StyleCardSlick key={`client-${id}`}>
					<ClientCardComponent image={image} name={name} />
				</StyleCardSlick>
			);
		});
	};

	return (
		<StyleClientsSection className="o-clientes">
			<div className="heading__clientes">
				<TitleComponent variant="BRANDON_55_65_800" color="primary">
					<strong>Clientes</strong>
				</TitleComponent>

				{/* Dropdown components */}
				<DropDown
					onChange={onChangeCategory}
					label="Todos"
					items={transformDropDown}
				/>
			</div>
			<Slider key={currentCategory ? 1 : 0} ref={ref} {...settings}>
				{slides()}
			</Slider>
		</StyleClientsSection>
	);
};

export default React.memo(Clients);
