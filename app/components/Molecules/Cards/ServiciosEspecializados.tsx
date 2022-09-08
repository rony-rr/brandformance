import React from 'react';

import Title from 'components/Atoms/Title';
import Text from 'components/Atoms/Text';
import Bubble from 'components/Atoms/Bubble/Bubble';

// components
import {
	StyleContentEspecializados,
	StyleContentEspPortada,
	StyleESpImage,
	StyleESpImageWrapper,
	StyleSECard,
	StyleImg,
	StyleBubble,
	StyleTextExtra,
	StyleHomeCarouselText,
} from './style';

interface CardSEProps {
	image: string;
	title?: string;
	content?: string;
	className?: string;
	isPortada?: boolean;
	isFullImage?: boolean;
	bubble?: string;
	bubblePosition?: BubbleType;
	extraSummary?: string;
}

export const CardServiciosEspecializados = React.memo(
	({
		image,
		title,
		content,
		isFullImage,
		className = '',
		isPortada = false,
		bubble,
		bubblePosition = 'top-left',
		extraSummary,
	}: CardSEProps) => {
		return (
			<StyleSECard className={`m-card__serviciosespecializados ${className}`}>
				<StyleContentEspecializados>
					<StyleContentEspPortada $isPortada={isFullImage ? false : isPortada}>
						{title && (
							<Title
								className="title-desk"
								color="black"
								variant="BRANDON_20_28_800"
								html={title}
							/>
						)}
						{!isPortada ? (
							<div>
								<Text variant="MONTSERRAT_16_22_400" html={content} />
								{bubble && (
									<StyleBubble
										className="bubble"
										$bubblePosition={bubblePosition}
									>
										<Bubble isDown={bubblePosition === 'bottom-left'}>
											{bubble}
										</Bubble>
									</StyleBubble>
								)}
								{extraSummary && (
									<StyleTextExtra>
										<StyleHomeCarouselText
											variant="MONTSERRAT_11_14_400"
											html={extraSummary}
										/>
									</StyleTextExtra>
								)}
							</div>
						) : (
							<StyleImg src={content} />
						)}
						{isFullImage && <StyleImg src={image} />}
					</StyleContentEspPortada>
				</StyleContentEspecializados>
				{!isFullImage && (
					<StyleESpImageWrapper>
						{image && <StyleESpImage src={image} />}
						{title && (
							<Title color="black" variant="BRANDON_20_28_800" html={title} />
						)}
					</StyleESpImageWrapper>
				)}
			</StyleSECard>
		);
	},
);

export default CardServiciosEspecializados;
