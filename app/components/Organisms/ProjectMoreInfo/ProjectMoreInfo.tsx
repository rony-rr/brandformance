import React from 'react';
import Slider, { Settings } from 'react-slick';
import { Col, Row } from 'antd';

// components
import Text from 'components/Atoms/Text/Text';
import ContactWithUs from 'components/Organisms/ContactWithUs';
import { DotAzulArrows } from 'components/Molecules/DotSliders';

// styles
import { StyleContactUs, StyleSlider, StyleTitle } from './style';

interface IProps {
	currentProject?: any;
}

const ProjectMoreInfo = ({ currentProject }: IProps) => {
	const ref = React.useRef<Slider>(null);

	const nextSlider = React.useCallback(() => {
		if (ref.current) {
			ref?.current?.slickNext();
		}
	}, []);

	const prevSlider = React.useCallback(() => {
		ref?.current?.slickPrev();
	}, []);

	const settings: Settings = React.useMemo(() => {
		return {
			dots: true,
			infinite: true,
			arrows: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			centerMode: true,
			swipeToSlide: true,
			centerPadding: '0px',
			appendDots: (dots) => (
				<DotAzulArrows
					dots={dots}
					onPrev={prevSlider}
					onNext={nextSlider}
					style={{
						left: 0,
						right: 0,
						bottom: 30,
						position: 'absolute',
					}}
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
		};
	}, [nextSlider, prevSlider]);

	const checkImg = [1, 2, 3, 4];
	return (
		<>
			{!currentProject ? (
				<div>No hay datos disponibles</div>
			) : (
				<>
					<StyleSlider>
						<Slider ref={ref} {...settings}>
							{checkImg.map((i) => {
								const img = currentProject[`gallery${i}`];
								if (img?.publicUrl) {
									return (
										<div key={`image-${currentProject.id}-${i}`}>
											<img
												className={`${currentProject.name.replace(/ /g, '-')}`}
												src={img.publicUrl}
												alt=""
											/>
										</div>
									);
								} else {
									return null;
								}
							})}
						</Slider>
					</StyleSlider>

					<StyleTitle variant="MONTSERRAT_32_40_700">
						{currentProject.name}
					</StyleTitle>

					<Row gutter={[20, 20]}>
						<Col xs={24} md={12} style={{ margin: 'auto auto' }}>
							<Text
								color="black"
								variant="MONTSERRAT_20_27_400"
								html={`<b>LO QUE CONSEGUIMOS</b> <br /> ${currentProject.conseguimos}`}
							/>
						</Col>

						<Col xs={24} md={12}>
							<Text
								variant="MONTSERRAT_14_20_400"
								html={currentProject.content}
							/>
						</Col>
					</Row>

					<StyleContactUs>
						<ContactWithUs variant="MODAL" />
					</StyleContactUs>
				</>
			)}
		</>
	);
};

export default React.memo(ProjectMoreInfo);
