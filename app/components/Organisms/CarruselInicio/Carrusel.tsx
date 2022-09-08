import React from 'react';
import { Col, Row } from 'antd';
import { Fade } from 'react-awesome-reveal';

// components
import Title from 'components/Atoms/Title';
import HomeCarouselCardComponent from 'components/Molecules/HomeCarouselCards';

// styles
import { StyleCarrusel } from './style';

interface CarouselProps {
	items: TarjetaInicioProps[];
}

const Carrusel = ({ items }: CarouselProps) => {
	return (
		<StyleCarrusel className="o-carrusel">
			<Row gutter={[40, 40]}>
				{items.map((item) => {
					const { id, title, content, image, extra, bubble } = item;
					return (
						<Col key={id} xs={24}>
							<Fade cascade triggerOnce>
								<HomeCarouselCardComponent
									key={'carrusel_inicio_' + id}
									image={image?.publicUrl}
									bubble={bubble}
									extraSummary={extra}
									bubblePosition="top-left"
									description={content}
									title={
										<Title
											color="magenta"
											variant="BRANDON_25_28_800"
											html={title}
										/>
									}
								/>
							</Fade>
						</Col>
					);
				})}
			</Row>
			{/*{slides}*/}
		</StyleCarrusel>
	);
};

export default React.memo(Carrusel);
