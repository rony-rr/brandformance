import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Bubble from 'components/Atoms/Bubble/Bubble';
import {
	StyleBubble,
	StyleCardWrapper,
	StyleHomeCarouselBody,
	StyleHomeCarouselCard,
	StyleHomeCarouselImage,
	StyleHomeCarouselText,
	StyleHomeCarouselTitle,
	StyleTextExtra,
} from './style';

interface IProps {
	image: string;
	title: React.ReactNode;
	description: string;
	extraSummary: string;
	bubble?: string;
	width?: number;
	height?: number;
	bubblePosition?: BubbleType;
	className?: string;
	style?: React.CSSProperties;
}

const HomeCarouselCard = React.memo((props: IProps) => {
	const {
		image,
		title,
		description,
		width = 450,
		height = 350,
		bubble,
		extraSummary,
		bubblePosition = 'top-left',
		...rest
	} = props;

	return (
		<StyleCardWrapper {...rest}>
			<StyleHomeCarouselCard $height={height} $image={image}>
				<Fade triggerOnce direction="up" cascade duration={1300}>
					<StyleHomeCarouselImage $image={image} />
				</Fade>
				<Fade triggerOnce direction="up" cascade duration={1300}>
					<StyleHomeCarouselBody>
						<StyleHomeCarouselTitle>{title}</StyleHomeCarouselTitle>
						<StyleHomeCarouselText
							variant="MONTSERRAT_16_22_400"
							html={description}
						/>
						{bubble && (
							<StyleBubble className="bubble" $bubblePosition={bubblePosition}>
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
					</StyleHomeCarouselBody>
				</Fade>
			</StyleHomeCarouselCard>
		</StyleCardWrapper>
	);
});

export default React.memo(HomeCarouselCard);
