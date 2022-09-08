import React from 'react';

import Slider, { Settings } from 'react-slick';

import { CardServiciosEspecializados } from 'components/Molecules/Cards';
import { DotAzulArrows } from 'components/Molecules/DotSliders';

// styles
import { StyleContentWrapper } from './style';

interface CarouselTabsProps {
	items: TabItemProps[];
}

const CarouselsTab = ({ items }: CarouselTabsProps) => {
	const ref = React.useRef<Slider>(null);

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
			dotsClass: 'slick-dots',
			infinite: true,
			speed: 30,
			fade: true,
			slidesToShow: 1,
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
		};
	}, [nextSlider, prevSlider]);

	const slides = React.useMemo(() => {
		return items.map((elem, i) => {
			const { title, content, image, portadaImage, bubble, bubblePosition, extra } = elem;
			const isFullImage = !title && !content && !portadaImage;
			return (
				<div key={'SE_card_' + i}>
					<CardServiciosEspecializados
						image={image.publicUrl}
						content={portadaImage ? portadaImage.publicUrl : content}
						title={title}
						bubblePosition={bubblePosition}
						bubble={bubble}
						extraSummary={extra}
						isPortada={!!portadaImage}
						isFullImage={isFullImage}
					/>
				</div>
			);
		});
	}, [items]);

	return (
		<>
			<StyleContentWrapper className="o-wrapp__serviciosespecializados">
				<Slider ref={ref} {...settings}>
					{slides}
				</Slider>
			</StyleContentWrapper>
		</>
	);
};

export default CarouselsTab;
