import React from 'react';
import { StyleBannerWrapper, StyleBannerImg } from './style';

interface IProps {
	image: string;
	imageMovil: string;
	className?: string;
}

const Banner = ({ image, imageMovil, className = '' }: IProps) => {
	return (
		<StyleBannerWrapper className={className}>
			<StyleBannerImg src={image} alt="Brandformance" $hide="MOVIL"/>
			<StyleBannerImg src={imageMovil} alt="Brandformance" $hide="DESKTOP" />
		</StyleBannerWrapper>
	);
};

export default React.memo(Banner);
